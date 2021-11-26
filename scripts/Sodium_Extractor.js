const NaExtractor = extendContent(GenericCrafter, "cryogem-dissipator");
const water = Liquids.water;
NaExtractor.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, NaExtractor, {
	draw(){
		Draw.rect(NaExtractor.region, this.x, this.y);
		Draw.color(water.color);
		Draw.alpha(this.liquids.get(water) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name + "-liquid"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(NaExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},	
});
