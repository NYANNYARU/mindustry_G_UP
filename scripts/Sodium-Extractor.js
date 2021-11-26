const SExtractor = extendContent(GenericCrafter, "Sodium-Extractor", {
});

const water = Liquids.water;
SExtractor.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, SExtractor, {
	draw(){
		Draw.rect(SExtractor.region, this.x, this.y);
		Draw.color(water.color);
		Draw.alpha(this.liquids.get(water) / SExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(SExtractor.name + "-liquid"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(SExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},	
});

const Wwater = Liquids.Waste_Water;
SExtractor.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, SExtractor, {
	draw(){
		Draw.rect(SExtractor.region, this.x, this.y);
		Draw.color(Wwater.color);
		Draw.alpha(this.liquids.get(Wwater) / SExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(SExtractor.name + "-liquid2"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(SExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},	
});
