class Controller {
  constructor() {
    this.initialiseSea();
  }

  initialiseSea() {
    let backgroundIndex = 0;
    window.setInterval(() => {
      console.log('test');
      const backgrounds = [
        'images/water0.png',
        'images/water1.png',
      ];
      document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
      backgroundIndex++;
    }, 1000);
  }
}
