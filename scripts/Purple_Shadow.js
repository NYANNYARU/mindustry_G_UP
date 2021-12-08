const PS = extendContent(ItemTurret, "Purple_Shadow", {
});


PS.buildType = () => extendContent(ItemTurret.ItemTurretBuild, PS, {
	this.unitSort = UnitSorts.strongest;
});
