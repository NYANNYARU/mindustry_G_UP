const color1 = Color.valueOf("9a79f7");
const instShoot_P = new Effect(60, e => {
    e.scaled(10, b -> {
            color(Color.white, color1, b.fin());
            stroke(b.fout() * 3f + 0.2f);
            Lines.circle(b.x, b.y, b.fin() * 50f);
        });

        color(color1);

        for(int i : Math.signs){
            Draw.tri(e.x, e.y, 13 * e.fout(), 85, e.rotation + 90 * i);
            Draw.tri(e.x, e.y, 13 * e.fout(), 50, e.rotation + 20 * i);
        }

        Draw.light(e.x, e.y, 180, color1, 0.9 * e.fout());
});
