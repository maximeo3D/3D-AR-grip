const assetConfiguration = {
  models: {
    "part_model": {
      name: "Modèle Part",
      file: "grip.glb",
      format: "bin",
      dataOffset: 66,
      meshes: {
        "grip": {
          materialSlots: ["slot1", "slot2"],
          tags: ["base"]
        }
      }
    }
  },
  materialConfigs: {
    "grip": {
      "black": {
        "slot1": "filament_black",
        "slot2": "fuzzy_black",
      },
      "sand": {
        "slot1": "filament_sand",
        "slot2": "fuzzy_sand",
      },
      "kaki": {
        "slot1": "filament_kaki",
        "slot2": "fuzzy_kaki",
      }
    },
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = assetConfiguration;
} else {
  window.assetConfig = assetConfiguration;
}
