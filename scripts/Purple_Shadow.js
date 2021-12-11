const PS = extendContent(ItemTurret, "Purple_Shadow", {});
PS.unitSort = (u, x, y) => -u.maxHealth;
