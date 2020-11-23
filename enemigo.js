class Enemigo{
    constructor(posX,posY){
        this.x = posX;
        this.y = posY;
        this.tam= 90;
    }

    move(){
        if(personaje.getX()>this.x){
            this.x += 0.9;
        } else {
            this.x -= 0.9;
        }
        if(personaje.getY()>this.y){
            this.y += 0.9;
        } else {
            this.y -= 0.9;
        }
        // this.show();
    }
    show(){
        image(eImg,this.x, this.y, this.tam ,this.tam);
    }

    getX(){
        return this.x
    }
    getY(){
        return this.y
    }

}
