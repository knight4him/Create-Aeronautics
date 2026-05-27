ServerEvents.tags('item', event => {
  event.add('c:dough', 'cornexpansion:corn_dough'),
  event.removeAllTagsFrom('kaleidoscope_cookery:raw_dough'),
  event.removeAllTagsFrom('create:dough'),
  event.add('c:food/dough','#c:dough')
}),

ServerEvents.recipes(event => {
  event.remove({output:'kaleidoscope_cookery:flour'}),
  event.remove({output:'create:wheat_flour'}),
  event.remove({output:'kaleidoscope_cookery:raw_dough'}),
  event.remove({output:'create:dough'}),

  event.replaceInput(
    {},
    'kaleidoscope_cookery:raw_dough',
    Ingredient.of('#c:dough')
  ),
  event.remove({input:'kaleidoscope_cookery:raw_dough'}),

  event.custom({
    "type": "create:cutting",
    "ingredients": [
      {
        "item": "farm_and_charm:dough"
      }
    ],
    "processing_time": 20,
    "results": [
      {
        "id": "kaleidoscope_cookery:raw_noodles"
      }
    ]
  }),
  
  event.custom({
    "type": "create:cutting",
    "ingredients": [
      {
        "item": 'cornexpansion:corn_dough'
      }
    ],
    "processing_time": 20,
    "results": [
      {
        "id": "kaleidoscope_cookery:raw_noodles"
      }
    ]
  }),

  event.custom({
    "type": "kaleidoscope_cookery:millstone",
    "ingredient": {
      "item": "minecraft:wheat"
    },
    "result": {
      "count": 4,
      "id": 'farm_and_charm:flour'
    }
  }),
  
  event.custom({
    "type": "kaleidoscope_cookery:millstone",
    "ingredient": {
      "item": "farm_and_charm:barley"
    },
    "result": {
      "count": 4,
      "id": 'farm_and_charm:flour'
    }
  }),
  
  event.custom({
    "type": "kaleidoscope_cookery:millstone",
    "ingredient": {
      "item": "farm_and_charm:corn"
    },
    "result": {
      "count": 4,
      "id": 'farm_and_charm:flour'
    }
  }),
  
  event.custom({
    "type": "kaleidoscope_cookery:millstone",
    "ingredient": {
      "item": "farm_and_charm:oat"
    },
    "result": {
      "count": 4,
      "id": 'farm_and_charm:flour'
    }
  }),
  
  event.custom({
    "type": "kaleidoscope_cookery:millstone",
    "ingredient": {
      "item": 'cornexpansion:dried_kernels'
    },
    "result": {
      "count": 2,
      "id": 'cornexpansion:corn_flour'
    }
  }),

  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": "minecraft:wheat"
      }
    ],
    "processing_time": 150,
    "results": [
      {
        "id": 'farm_and_charm:flour',
        "count": 3
      },
      {
        "chance": 0.25,
        "count": 2,
        "id": 'farm_and_charm:flour'
      },
      {
        "chance": 0.25,
        "id": "minecraft:wheat_seeds"
      }
    ]
  }),
  
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": "farm_and_charm:barley"
      }
    ],
    "processing_time": 150,
    "results": [
      {
        "id": 'farm_and_charm:flour',
        "count": 3
      },
      {
        "chance": 0.25,
        "count": 2,
        "id": 'farm_and_charm:flour'
      },
      {
        "chance": 0.25,
        "id": "farm_and_charm:barley_seeds"
      }
    ]
  }),

  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": "farm_and_charm:corn"
      }
    ],
    "processing_time": 150,
    "results": [
      {
        "id": 'farm_and_charm:flour',
        "count": 3
      },
      {
        "chance": 0.25,
        "count": 2,
        "id": 'farm_and_charm:flour'
      },
      {
        "chance": 0.25,
        "id": "farm_and_charm:kernels"
      }
    ]
  }),

  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": "farm_and_charm:oat"
      }
    ],
    "processing_time": 150,
    "results": [
      {
        "id": 'farm_and_charm:flour',
        "count": 3
      },
      {
        "chance": 0.25,
        "count": 2,
        "id": 'farm_and_charm:flour'
      },
      {
        "chance": 0.25,
        "id": "farm_and_charm:oat_seeds"
      }
    ]
  }),

  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": 'cornexpansion:dried_kernels'
      }
    ],
    "processing_time": 150,
    "results": [
      {
        "id": 'cornexpansion:corn_flour',
        "count": 1
      },
      {
        "chance": 0.25,
        "count": 2,
        "id": 'cornexpansion:corn_flour'
      }
    ]
  })
})