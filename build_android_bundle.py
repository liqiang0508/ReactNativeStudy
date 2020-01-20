import os


print("build_android_bundle  start**************")


cmd = "react-native bundle --platform android --dev false --entry-file index.js  --bundle-output ./bundle/index.android.bundle --assets-dest ./bundle"

os.system(cmd)
print("build_android_bundle  end**************")
os.system("pause")