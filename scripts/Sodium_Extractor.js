const NaExtractor = extendContent(GenericCrafter, "Sodium_Extractor", {
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

const water = Liquids.water , Waste_Water = Liquids.@Waste_Water;
NaExtractor.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, NaExtractor, {
	draw(){
		Draw.rect(NaExtractor.region, this.x, this.y);
		Draw.color(water.color);
		Draw.alpha(this.liquids.get(water) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name + "-liquid"), this.x, this.y);
		/*Draw.color(Wwater.color);
		Draw.alpha(this.liquids.get(Wwater) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name + "-liquid2"), this.x, this.y);*/
		Draw.color();
		Draw.rect(Core.atlas.find(NaExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},
});
