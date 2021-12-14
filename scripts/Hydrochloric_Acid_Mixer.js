const HAM = extendContent(GenericCrafter, "Hydrochloric_Acid_Mixer", {});

const HA = new Liquid("Hydrochloric_Acid");
HAM.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, HAM, {
	draw(){
		Draw.rect(HAM.region, this.x, this.y);
		Draw.color(HA.color);
		Draw.alpha(this.liquids.get(HA) / HAM.liquidCapacity);
		Draw.rect(Core.atlas.find(HAM.name + "-liquid"), this.x, this.y);
		Draw.color();
		Draw.rect(Core.atlas.find(HAM.name + "-top"), this.x, this.y);
		Draw.reset();
	},
});
