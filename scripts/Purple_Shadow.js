const color1 = Color.valueOf("9a79f7");
const color2 = Color.valueOf("ede7ff");
const instShoot_S = new Effect(60, e => {
    e.scaled(10, b -> {
        color(Color.white, color1, b.fin());
        stroke(b.fout() * 3 + 0.2);
        Lines.circle(b.x, b.y, b.fin() * 50f);
    });

    color(color1);

    for(int i : Math.signs){
        Draw.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation + 90 * i);
        Draw.tri(e.x, e.y, 13 * e.fout(), 50, e.rotation + 20 * i);
    }

    Draw.light(e.x, e.y, 180, color1, 0.9 * e.fout());
}),

instHit_S = new Effect(20, 200, e -> {
    color(color1);

    for(var i = 0; i < 2; i++){
        color(i == 0 ? color1 : color2);

        var m = i == 0 ? 1 : 0.5;

        for(var j = 0; j < 5; j++){
            var rot = e.rotation + Math.randomSeedRange(e.id + j, 50);
            var w = 23 * e.fout() * m;
            Draw.tri(e.x, e.y, w, (80 + Math.randomSeedRange(e.id + j, 40)) * m, rot);
            Draw.tri(e.x, e.y, w, 20 * m, rot + 180);
        }
    }

    e.scaled(10, c -> {
        color(color2);
        stroke(c.fout() * 2 + 0.2);
        Lines.circle(e.x, e.y, c.fin() * 30);
    });

    e.scaled(12, c -> {
        color(color1);
        randLenVectors(e.id, 25, 5 + e.fin() * 80, e.rotation, 60, (x, y) -> {
            Fill.square(e.x + x, e.y + y, c.fout() * 3, 45);
        });
    });
}),

instTrail_S = new Effect(30, e -> {
    for(var i = 0; i < 2; i++){
        color(i == 0 ? color1 : color2);

        var m = i == 0 ? 1 : 0.5;

        var rot = e.rotation + 180;
        var w = 15 * e.fout() * m;
        Draw.tri(e.x, e.y, w, (30 + Math.randomSeedRange(e.id, 15)) * m, rot);
        Draw.tri(e.x, e.y, w, 10 * m, rot + 180);
    }

    Draw.light(e.x, e.y, 60, color1, 0.6 * e.fout());
}),

const PointBulletType_S = extend(PointBulletType{});
PointBulletType_S.shootEffect = Fx.instShoot_S;
PointBulletType_S.hitEffect = instHit_S;
PointBulletType_S.smokeEffect = Fx.smokeCloud;
PointBulletType_S.trailEffect = instTrail_S;
PointBulletType_S.despawnEffect = instBomb;
PointBulletType_S.trailSpacing = 20;
PointBulletType_S.damage = 2000;
PointBulletType_S.buildingDamageMultiplier = 0.5;
PointBulletType_S.speed = 640;
PointBulletType_S.hitShake = 6;
PointBulletType_S.ammoMultiplier = 1;

const PS = extendContent(ItemTurret, "Purple_Shadow", {});
PS.unitSort = (u, x, y) => -u.maxHealth;
PS.ammo.add(surgeAlloy, PointBulletType_S);
