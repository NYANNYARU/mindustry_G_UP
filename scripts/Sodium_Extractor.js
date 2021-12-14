const NaExtractor = extendContent(GenericCrafter, "Sodium_Extractor", {});

const water = Liquids.water;
const Wwater = new Liquid("Waste_Water");
NaExtractor.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, NaExtractor, {
	draw(){
		Draw.rect(NaExtractor.region, this.x, this.y);
		Draw.color(water.color);
		Draw.alpha(this.liquids.get(water) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name + "-liquid"), this.x, this.y);
		Draw.color(Wwater.color);
		Draw.alpha(this.liquids.get(Wwater) / NaExtractor.liquidCapacity);
		Draw.rect(Core.atlas.find(NaExtractor.name + "-liquid2"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(NaExtractor.name + "-top"), this.x, this.y);
		Draw.reset();
	},
});
