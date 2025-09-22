(function(){
  const STORAGE_KEY = 'notes_state_v1';

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
    notes.unshift({
      id: Date.now(),
      ...note
    });
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

  // Expose globally
  window.Notes = {
    getNotes,
    addNote,
    formatTimestamp
  };
})();
