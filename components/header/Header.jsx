import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import menu from "../../assets/menu-light.png";
import logo from "../../assets/logo.png";
import HeaderButton from "./HeaderButton";
import { useState } from "react";
import { COLORS } from "../../constants/theme";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onPressed = () => {
    setIsOpenMenu(!isOpenMenu);
    console.log("**PRESSED** Header menu");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <HeaderButton
          icon={menu}
          dimension={"60%"}
          handlePress={onPressed}
        ></HeaderButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  logo: {
    flex: 0.4,
    height: 35,
  },
  title: {
    color: COLORS.fontPrimary,
    fontSize: 16,
  },
});
