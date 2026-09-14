document.getElementById('signup-form').addEventListener('submit', function(e){
    e.preventDefault();
    var note = document.getElementById('signup-note');
    note.classList.add('show');
    this.reset();
  });
