const hpht = extendContent(GenericSmelter, "HPHT", {
	/* drawBase: function(tile){
        this.super$drawBase(tile);
        Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(this.liquids.total() / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
        Draw.reset();
	}, */
});

const slag = Liquids.slag;
const dia = new Item("Diamond");
hpht.buildType = () => extendContent(GenericSmelter.SmelterBuild, hpht, {
	draw(){
		Draw.rect(hpht.region, this.x, this.y);
		Draw.color(slag.color);
		Draw.alpha(this.liquids.get(slag) / hpht.liquidCapacity);
		Draw.rect(Core.atlas.find(hpht.name + "-liquid"), this.x, this.y);
		Draw.color(0xFF0000);
		Draw.alpha(this.liquids.get(slag) / hpht.liquidCapacity);
    		Draw.rect(Core.atlas.find(hpht.name + "-heat"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(hpht.name + "-top"), this.x, this.y);
		Draw.alpha(this.liquids.get(slag) / hpht.liquidCapacity);
		Draw.rect(Core.atlas.find(hpht.name + "-heat2"), this.x, this.y);
		Draw.reset();
		if((this.liquids.get(slag) / hpht.liquidCapacity) < 0.99){
		    this.progress = 0;
		}
	},
});
