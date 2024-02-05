import { useNavigation } from "react-router-dom";

export default function useIsLoadingData() {
  const navigation = useNavigation();

  return navigation.state === "loading";
}
