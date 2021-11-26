const SExtractor = extendContent(GenericCrafter, "Sodium_Extractor", {
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
const water = Liquids.water;
SExtractor.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, SExtractor, {
	draw(){
		Draw.rect(SExtractor.region, this.x, this.y);
		Draw.color(water.color);
		Draw.alpha(this.liquids.get(cryoLiquid) / SExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(SExtractor.name + "-liquid"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(SExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},	
});
