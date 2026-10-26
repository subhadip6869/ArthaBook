import RadioButton from "../../../../core/components/RadioButton";
import { useTheme } from "../../../../core/features/theme/hook/useTheme";
import type { ThemePreference } from "../../../../core/features/theme/reducer/themeReducer";
import { Card } from "../components/Card";
import { PageHeader } from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";

export default function SettingsPage() {
	const { themeState, themeDispatch } = useTheme();

	return (
		<div className="max-w-lg m-4">
			<PageHeader
				title="Settings"
				description="Your profile, display preferences and security."
			/>

			<Card>
				<SectionHeader title="Appearance" />
				<RadioButton<ThemePreference>
					current={themeState.mode}
					items={[
						{ value: "light", label: "Light" },
						{ value: "dark", label: "Dark" },
					]}
					onClick={(mode) => themeDispatch(mode)}
				/>
			</Card>
		</div>
	);
}
