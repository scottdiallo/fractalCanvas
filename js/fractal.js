(function(){
    var GLB = window.GLB = window.GLB || {};
    var FRACTAL_PROTOTYPE = {
        circleFractal: function(x, y, radius){
            console.log('hi');

            GLB.Draw.drawCircle(x, y, radius)
            if (radius > 2){
                radius *= 0.75
        // this.circleFractal(x, y, radius);
        this.circleFractal(x + radius/2, y, radius/2)
        this.circleFractal(x - radius/2, y, radius/2)
        this.circleFractal(x + radius/3, y, radius/2)
        this.circleFractal(x - radius/2, y, radius/2)
    }
  },
}

    GLB.Fractal = {
            create: function(){
                var fractal = Object.create(FRACTAL_PROTOTYPE);

                return fractal
        }
    };
})();
