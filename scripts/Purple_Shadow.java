foreshadow = new ItemTurret("foreshadow"){{
            float brange = range = 500f;

            requirements(Category.turret, with(Items.copper, 2000, Items.metaglass, 1200, Items.surgeAlloy, 600, Items.plastanium, 400, Items.silicon, 1200));
            ammo(
                Items.surgeAlloy, new PointBulletType(){{
                    shootEffect = Fx.instShoot;
                    hitEffect = Fx.instHit;
                    smokeEffect = Fx.smokeCloud;
                    trailEffect = Fx.instTrail;
                    despawnEffect = Fx.instBomb;
                    trailSpacing = 20f;
                    damage = 1350;
                    buildingDamageMultiplier = 0.2f;
                    speed = brange;
                    hitShake = 6f;
                    ammoMultiplier = 1f;
                }}
            );

            maxAmmo = 40;
            ammoPerShot = 5;
            rotateSpeed = 2f;
            reloadTime = 200f;
            ammoUseEffect = Fx.casing3Double;
            recoilAmount = 5f;
            restitution = 0.009f;
            cooldown = 0.009f;
            shootShake = 4f;
            shots = 1;
            size = 4;
            shootCone = 2f;
            shootSound = Sounds.railgun_S;
            unitSort = UnitSorts.strongest;

            coolantMultiplier = 0.4f;

            health = 3000;
            coolantUsage = 1f;

            consumes.powerCond(20f, TurretBuild::isActive);
        }};
