class atributosGenerales{
    constructor(health,attack,deffense,speed){
        this.setHealth(health)
        
        this.setAttack(attack)
        this.setDeffense(deffense)

        this.rageRequirement=1000

        this.setSpeed(speed)

        console.log(this);
    }
    getHealth(){
        return this.health
    }
    getAttack(){
        return this.attack
    }
    getDeffense(){
        return this.deffense
    }
    getSpeed(){
        return this.speed
    }
    setHealth(atributo){
        if(atributo==undefined){
            this.health=0
            return
        }
        this.health=atributo
    }
    setAttack(atributo){
        if(atributo==undefined){
            this.attack=0
            return
        }
        this.attack=atributo
    }
    setDeffense(atributo){
        if(atributo==undefined){
            this.deffense=0
            return
        }
        this.deffense=atributo
    }
    setSpeed(atributo){
        if(atributo==undefined){
            this.speed=0
            return
        }
        this.speed=atributo
    }
}
class Caballos extends atributosGenerales{
    constructor(nivel){
        // health,attack,deffense,speed

        let atributosAtt=[50,60,70,80,90]
        let atributosDeff=[50,60,70,80,90]
        let atributosHealth=[50,60,70,80,90]
        let atributosSpeed=[10,20,35,45,65]

        super(atributosHealth[nivel],atributosAtt[nivel],atributosDeff[nivel],atributosSpeed[nivel]);
    }
}

class Tropas{
    constructor (cantidadTropas, unidad){
        this.cantidad=cantidadTropas
        this.unidad=unidad
    }
    getTroopAmount(){
        return this.cantidad
    }
    getUnidad(){
        return this.unidad
    }
}

class ParejaComandantes extends atributosGenerales{
    constructor(ComandantePrimario,ComandanteSecundario,ejercito){
        super()
        
        this.maxTropas=ejercito.getTroopAmount()
        this.tropasEjercito=ejercito

        this.primary=ComandantePrimario
        this.secondary=ComandanteSecundario

        this.unirEstadisticas()
    }
    unirEstadisticas(){
        this.attack=this.primary.getAttack()+this.secondary.getAttack()
        this.deffense=this.primary.getDeffense()+this.secondary.getDeffense()
        this.health=this.primary.getHealth()+this.secondary.getHealth()

        this.speed=this.primary.getSpeed()+this.secondary.getSpeed()
    }
    getTroopHealth(){
        return this.tropasEjercito.getUnidad().getHealth() * ( 1 + (this.getHealth()/100))
    }
    getTroopDeffense(){
        return this.tropasEjercito.getUnidad().getDeffense() * ( 1 + (this.getDeffense()/100))
    }
    getTroopAttack(){
        return this.tropasEjercito.getUnidad().getAttack() * ( 1 + (this.getAttack()/100))
    }
    getTroopSpeed(){
        return this.tropasEjercito.getUnidad().getSpeed() * ( 1 + (this.getSpeed()/100))
    }

}

class Comandante extends atributosGenerales{
    constructor(nombre){
        super()
        this.name=nombre
    }
}
class SunTzu extends Comandante{
    constructor(){
        super('Sun Tzu')
    }
}
class Eilji extends Comandante{
    constructor(){
        super('Eulji Mundeok')
    }
}


class SkillTree{

}
class NodoTalento{

}