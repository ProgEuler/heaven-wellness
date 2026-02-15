import { Platform } from "react-native";
import { useColor } from "@/hooks/useColor";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import MaterialIcons from "@expo/vector-icons/Feather";
import {
  Badge,
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  const red = useColor("red");
  const primary = useColor("primary");
  const foreground = useColor("foreground");

  return (
    <NativeTabs
      minimizeBehavior="onScrollDown"
      labelStyle={{
        default: { color: primary },
        selected: { color: foreground },
      }}
      iconColor={{
        default: primary,
        selected: foreground,
      }}
      badgeBackgroundColor={red}
      labelVisibilityMode="labeled"
      disableTransparentOnScrollEdge={true}
    >
      <NativeTabs.Trigger name="(home)">
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
          ),
        })}
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="booking">
        {Platform.select({
          ios: <Icon sf="calendar" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="calendar" />} />
          ),
        })}
        <Label>Booking</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="access">
        {Platform.select({
          ios: <Icon sf="key.fill" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="key" />} />
          ),
        })}
        <Label>Access</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        {Platform.select({
          ios: <Icon sf="person.fill" />,
          android: (
            <Icon src={<VectorIcon family={MaterialIcons} name="user" />} />
          ),
        })}
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
