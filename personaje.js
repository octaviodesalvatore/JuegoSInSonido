class Personaje{
    constructor(){
        this.x = 50;
        this.y = 100;
        this.tam= 100;
    }


    show(){
        image(pImg,this.x, this.y, this.tam ,this.tam);
    }

    moveUp(){
      if(this.y>1){
        this.y= this.y - 5;
      }
    }
    moveDown(){
      if(this.y<620){
        this.y= this.y + 5;
      }
    }
      moveLeft(){
        if(this.x>1){
          this.x= this.x - 5;
        }
      }
      moveRight(){
        if(this.x<1200){
          // console.log(this.x)
          this.x= this.x + 5;
          // if (this.x>1035 && this.x<1200 && this.y<620 && this.y>500){
          //   nivel1_Termino=true;
          //   this.x=50;
          //   this.y=50;
          // }
        }
      }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    setX(x){
      this.x = x
    }
    setY(y){
      this.y = y
    }

}