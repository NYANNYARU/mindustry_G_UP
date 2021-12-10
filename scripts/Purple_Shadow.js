const PS = extendContent(ItemTurret, "Purple_Shadow", {
	init(){
        	this.super$init();
        },
	icons: function(){
		return [
			Core.atlas.find("mindustry_G_UP-Purple_Shadow-base"),
			Core.atlas.find("mindustry_G_UP-Purple_Shadow-icon")
		];
	}
});

PS.unitSort = UnitSorts.strongest;
