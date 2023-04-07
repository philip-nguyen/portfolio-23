import SceneManager from './SceneManager';

/* Responsible for:
- Creating the canvas
- Binding events
- Create Three.js objects
- Starting the render loop
 */

export default containerElement => {
    const canvas = createCanvas(document, containerElement);
    const sceneManager = new SceneManager(canvas);
    // add tailwind css classname to canvas to send to back
    canvas.classList.add('z-[-1]');

    bindEventListeners();
    render();

    function createCanvas(document, containerElement) {
        const canvas = document.createElement('canvas');
        containerElement.current.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        window.onscroll = scroll;
        resizeCanvas();
    }

    function resizeCanvas() {
        canvas.style.width = window.innerWidth;
        canvas.style.height= window.innerHeight;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        sceneManager.onWindowResize();
    }

    function scroll() {
        sceneManager.onScroll();
    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
}