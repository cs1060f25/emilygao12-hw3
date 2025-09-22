(function(){
  const STORAGE_KEY = 'notes_state_v1';
  const SEED_FLAG_KEY = 'notes_seeded_v1';

  function loadNotes(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch(e){
      console.warn('Failed to load notes from storage:', e);
      return [];
    }
  }

  function saveNotes(notes){
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch(e){
      console.warn('Failed to save notes to storage:', e);
    }
  }

  function getNotes(){
    return loadNotes();
  }

  function addNote(note){
    const notes = loadNotes();
    const id = (note && typeof note.id === 'number') ? note.id : Date.now();
    notes.unshift({ id, ...note });
    saveNotes(notes);
  }

  function formatTimestamp(date){
    // Format: YYYY-MM-DD HH:mm:ss
    const pad = (n)=> String(n).padStart(2,'0');
    const y = date.getFullYear();
    const m = pad(date.getMonth()+1);
    const d = pad(date.getDate());
    const hh = pad(date.getHours());
    const mm = pad(date.getMinutes());
    const ss = pad(date.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }

  function ensureSeed(){
    try {
      if(localStorage.getItem(SEED_FLAG_KEY)) return; // already seeded
      const existing = loadNotes();
      const now = new Date();

      const oneYearAgo = new Date(now.getTime());
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      const sixMonthsAgo = new Date(now.getTime());
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      const twoDaysAgo = new Date(now.getTime());
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

      const seeds = [
        {
          id: oneYearAgo.getTime(),
          type: 'text',
          content: 'Saw the sunset in Lisbon today',
          timestamp: formatTimestamp(oneYearAgo)
        },
        {
          id: sixMonthsAgo.getTime(),
          type: 'audio',
          content: '[Audio Note] Hummed a melody in Tokyo',
          timestamp: formatTimestamp(sixMonthsAgo)
        },
        {
          id: twoDaysAgo.getTime(),
          type: 'text',
          content: 'Quick idea: combine journaling with music',
          timestamp: formatTimestamp(twoDaysAgo)
        }
      ];

      // Merge seeds with existing without duplicates by id
      const existingIds = new Set(existing.map(n => n.id));
      const merged = existing.slice();
      seeds.forEach(s => { if(!existingIds.has(s.id)) merged.push(s); });
      saveNotes(merged);
      localStorage.setItem(SEED_FLAG_KEY, '1');
    } catch(e){
      console.warn('Failed to seed notes:', e);
    }
  }

  // Expose globally
  window.Notes = {
    getNotes,
    addNote,
    formatTimestamp
  };

  // Perform one-time seed for demo purposes
  ensureSeed();
})();
