import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button
} from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import Button from "@/components/Button";

type TData = {
  name: string;
  email: string;
};
export default function SettingsScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TData>();
  const [submittedData, setSubmittedData] = useState<TData | null>(null);

  const onSubmit: SubmitHandler<TData> = (data) => console.log(data);
  // const onSubmit = (data: TData): void => {
  //   console.log("ASDASD");
  //   // Simulate form submission
  //   console.log("Submitted Data:", data);
  //   setSubmittedData(data);
  // };

  // useEffect(() => {
  //   console.log(submittedData);
  // }, [submittedData]);

  // console.log(errors);
  console.log(JSON.stringify(errors, null, "\t"));
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {/* Form Girdileri */}
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput {...field} style={styles.input} placeholder="Your Name" />
        )}
        name="name"
        rules={{ required: { value: true, message: "Name is required" } }}
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput {...field} style={styles.input} placeholder="Email" />
        )}
        name="email"
        rules={{
          required: { value: true, message: "Name is required" },
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Enter a valid email address"
          }
        }}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      {/* Submit Butonu */}
      {/* <Button onPress={() => handleSubmit(onSubmit)} mode="flat">
        Submit
      </Button> */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {/* Gönderilen Veriler */}
      {submittedData && (
        <View>
          <Text>Submitted Data:</Text>
          <Text>Name: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
        </View>
      )}
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10
  // },
  textarea: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    height: 140
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
});
