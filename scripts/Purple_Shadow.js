const PS = extendContent(ItemTurret, "Purple_Shadow", {
  this.unitSort = UnitSorts.strongest;
	
	init(){
        this.super$init();
    	},
	icons: function(){
		return [
			Core.atlas.find("mindustry_G_UP-Purple_Shadow-base"),
			Core.atlas.find("mindustry_G_UP-Purple_Shadow")
		];
	}
});
