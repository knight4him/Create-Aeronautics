ServerEvents.recipes(event => {
  event.remove({output:'#camping:backpacks'}),
  event.remove({output:'itoneo:katometer'}),
  event.remove({output:'itoneo:telosmeter'}),
  event.remove({output:'itoneo:multi_katometer'}),
  event.remove({output:'itoneo:viator'}),
  event.replaceOutput({},'minecraft:ender_pearl','minecraft:air')
})