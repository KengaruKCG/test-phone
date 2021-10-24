namespace SpriteKind {
    export const Pp = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Pp, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.setPosition(73, 42)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Pp, SpriteKind.Food, function (sprite, otherSprite) {
    game.splash("You drink it")
    info.changeLifeBy(-3)
    info.changeLifeBy(9)
    mySprite.setPosition(58, 0)
    mySprite4.destroy()
})
info.onLifeZero(function () {
    mySprite3.destroy()
    pause(2000)
    light.showAnimation(light.rainbowAnimation, 1000)
    game.splash("Good by")
    game.over(false, effects.clouds)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 1 1 1 1 f f . . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 f 1 1 1 1 f 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 f f f f 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 f 1 f 1 f 1 f f . . . 
    . . . . f . f . f . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Pp)
scene.setBackgroundColor(1)
let Tree = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Projectile)
Tree.setPosition(141, 107)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Projectile)
mySprite2.setPosition(101, 63)
mySprite3 = sprites.create(img`
    ...............ff.......
    .............ff2ffff....
    ............ff2feeeeff..
    ...........ff22feeeeeff.
    ...........feeeeffeeeef.
    ..........fe2222eefffff.
    ..........f2effff222efff
    ..........fffeeeffffffff
    ..........fee44fbe44efef
    ...........feddfb4d4eef.
    ..........c.eeddd4eeef..
    ....ccccccceddee2222f...
    .....dddddcedd44e444f...
    ......ccccc.eeeefffff...
    ..........c...ffffffff..
    ...............ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite3.setPosition(38, 7)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f e e e e e f . . . . 
    . . . . . . f f e f f . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . . f 3 f . . . . . . 
    . . . . . . f f 3 f f . . . . . 
    . . . . . f f 3 3 3 f f . . . . 
    . . . . . f 3 3 3 3 3 f . . . . 
    . . . . . f 3 3 3 3 2 f . . . . 
    . . . . . f 3 3 3 2 2 f . . . . 
    . . . . . f 2 2 2 2 2 f . . . . 
    . . . . . f 2 2 2 2 2 f . . . . 
    . . . . . f f f 2 f f f . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite4.setPosition(160, 120)
