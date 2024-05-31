// Extend the PurpleLine class
class PurpleLine {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.drawX = this.x;
        this.drawY = this.y;
        this.drawW = this.w;
        this.drawH = this.h;
    }

    display() {
        fill(linePurple);
        rect(this.drawX, this.drawY, this.drawW, this.drawH);
    }

    updateSize(insideCanvasWidth, insideCanvasHeight) {
        this.drawX = this.x * insideCanvasWidth + insideCanvas.x;
        this.drawY = this.y * insideCanvasHeight + insideCanvas.y;
        this.drawW = this.w * insideCanvasWidth;
        this.drawH = this.h * insideCanvasHeight;
    }

    // Method to check if a point (mouseX, mouseY) is inside the purple line rectangle
    isClicked(mouseX, mouseY) {
        return mouseX > this.drawX && mouseX < this.drawX + this.drawW && mouseY > this.drawY && mouseY < this.drawY + this.drawH;
    }
}

// MovingCircle class to represent circles that move along the purple lines
class MovingCircle {
    constructor(purpleLine, color) {
        this.purpleLine = purpleLine; // The purple line the circle will move along
        this.color = color; // Color of the circle
        this.radius = Math.min(purpleLine.drawW, purpleLine.drawH) / 2; // Radius of the circle, based on the smaller dimension of the rectangle
        this.x = purpleLine.drawX; // Initial x position of the circle
        this.y = purpleLine.drawY; // Initial y position of the circle
        this.speed = 2; // Speed at which the circle moves
        this.direction = {
            x: purpleLine.drawW > 0 ? 1 : -1, // Direction of movement along the x-axis
            y: purpleLine.drawH > 0 ? 1 : -1  // Direction of movement along the y-axis
        };
    }

    // Method to move the circle along the purple line
    move() {
        // Move along the x-axis
        if (this.direction.x > 0) {
            this.x += this.speed;
            if (this.x > this.purpleLine.drawX + this.purpleLine.drawW) {
                this.x = this.purpleLine.drawX;
            }
        } else {
            this.x -= this.speed;
            if (this.x < this.purpleLine.drawX) {
                this.x = this.purpleLine.drawX + this.purpleLine.drawW;
            }
        }


        // Move along the y-axis
        if (this.direction.y > 0) {
            this.y += this.speed;
            if (this.y > this.purpleLine.drawY + this.purpleLine.drawH) {
                this.y = this.purpleLine.drawY;
            }
        } else {
            this.y -= this.speed;
            if (this.y < this.purpleLine.drawY) {
                this.y = this.purpleLine.drawY + this.purpleLine.drawH;
            }
        }
    }






}