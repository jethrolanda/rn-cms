import { Button, Image, View, StyleSheet } from "react-native";
import * as ImgPicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

const ImagePicker = ({
  setImageURI,
  imageURI
}: {
  setImageURI: React.Dispatch<React.SetStateAction<string>>;
  imageURI: string;
}) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImgPicker.launchImageLibraryAsync({
      mediaTypes: ImgPicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);
    if (!result.canceled) {
      // let test = MediaLibrary.saveToLibraryAsync(result.assets[0].uri);
      // console.log(test);
      setImageURI(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  image: {
    width: 200,
    height: 200
  }
});
