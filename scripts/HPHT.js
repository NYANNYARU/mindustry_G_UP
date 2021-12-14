const hpht = extendContent(GenericSmelter, "HPHT", {});

const slag = Liquids.slag;
hpht.buildType = () => extendContent(GenericSmelter.SmelterBuild, hpht, {
	draw(){
		Draw.rect(hpht.region, this.x, this.y);
		Draw.color(slag.color);
		Draw.alpha(this.liquids.get(slag) / hpht.liquidCapacity);
		Draw.rect(Core.atlas.find(hpht.name + "-liquid"), this.x, this.y);
		Draw.color(1,0,0,1);
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
