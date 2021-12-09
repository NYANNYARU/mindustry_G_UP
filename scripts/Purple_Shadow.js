const PS = extendContent(ItemTurret, "Purple_Shadow", {
  this.unitSort = UnitSorts.strongest;
  icons: function(){
		return [
			Core.atlas.find("block-4"),
			Core.atlas.find("Purple_Shadow")
		];
	}
});
