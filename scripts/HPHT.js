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
hpht.buildType = () => extendContent(GenericSmelter.GenericCrafterBuild, hpht, {
	draw(){
		Draw.rect(hpht.region, this.x, this.y);
		Draw.color(slag.color);
		Draw.alpha(this.liquids.get(slag) / hpht.liquidCapacity);
		Draw.rect(Core.atlas.find(hpht.name + "-liquid"), this.x, this.y);
		Draw.color(FF0000);
    		Draw.rect(Core.atlas.find(hpht.name + "-top"), this.x, this.y);
   		Draw.color();
		Draw.rect(Core.atlas.find(NaExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},
});
