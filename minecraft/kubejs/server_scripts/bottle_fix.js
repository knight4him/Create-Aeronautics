ServerEvents.recipes(event => {
  event.remove({id:'vinery:wine_bottle'}),
  event.remove({id:'kaleidoscope_tavern:empty_bottle'}),
  event.shapeless(
    Item.of('vinery:wine_bottle',1),
    [
      'kaleidoscope_tavern:empty_bottle'
    ]
  ),
  event.shapeless(
    Item.of('kaleidoscope_tavern:empty_bottle',1),
    [
      'vinery:wine_bottle'
    ]
  ),
  event.shaped(
    Item.of('vinery:wine_bottle',2),
    [
      'A',
      'A'
    ],
    {
      A: 'minecraft:glass_bottle'
    }
  )
  event.shaped(
    Item.of('kaleidoscope_tavern:empty_bottle',2),
    [
      'A',
      'A'
    ],
    {
      A: 'minecraft:glass_bottle'
    }
  )
})