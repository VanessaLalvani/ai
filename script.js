document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is loaded and ready!');
    const audio = document.getElementById('scary-sound');
    audio.play().catch(err => console.error('Audio playback failed:', err));
});
