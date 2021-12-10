const PS = extendContent(ItemTurret, "Purple_Shadow", {
	icons: function(){
		return [
			Core.atlas.find("mindustry_G_UP-Purple_Shadow-base"),
			Core.atlas.find("mindustry_G_UP-Purple_Shadow")
		];
	}
});

PS.buildType = () => extendContent(ItemTurret.ItemTurretBuild, PS, {
	this.unitSort = UnitSorts.strongest;
});
