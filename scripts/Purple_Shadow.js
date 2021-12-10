const statuses = require("libs/statuses");
const fc = require("libs/fc");
const extras = require("extras/voidicsm");
const bombs = require("blocks/bombs")

const PS = extendContent(ItemTurret, "Purple_Shadow", {
	icons: function(){
		return [
			Core.atlas.find("mindustry_G_UP-Purple_Shadow-base"),
			Core.atlas.find("mindustry_G_UP-Purple_Shadow-icon")
		];
	}
});

PS.buildType = () => extendContent(ItemTurret.ItemTurretBuild, PS, {
	unitSort: (u, x, y) => -u.maxHealth
});
