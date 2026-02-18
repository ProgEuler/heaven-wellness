// import { COLORS } from "@/constants";
import { ReactNode } from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type Props = {
  children?: ReactNode;
  stickyHeaderIndices?: number[];
  refreshControl?: React.ReactElement<any>;
  paddingHorizontal?: number;
  backgroundColor?: string;
  paddingTop?: number;
  fixedHeader?: ReactNode;
} & SafeAreaViewProps;

export function Layout({
  children,
  style,
  refreshControl,
  paddingTop,
  fixedHeader,
  ...props
}: Props) {
  const activePaddingHorizontal = props.paddingHorizontal ?? 16;
//   const { contentPaddingBottom } = useSafeAreaWithKeyboard();

  return (
    <SafeAreaView
      edges={props.edges || ['left', 'right']}
      style={{
        flex: 1,
      //   backgroundColor: props.backgroundColor || COLORS.white,
        paddingHorizontal: activePaddingHorizontal,
      }}
      {...props}
    >
      {fixedHeader}
      <KeyboardAwareScrollView
        stickyHeaderIndices={props.stickyHeaderIndices}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardDismissMode="interactive"
        bottomOffset={Platform.OS === 'android' ? 40 : 20}
        refreshControl={refreshControl}
        contentContainerStyle={[
          {
            flexGrow: 1,
            gap: 18,
            paddingBottom: 120,
            paddingTop: 180,
          },
          style,
        ]}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
