import { NumberTicker } from "@/components/ui/number-ticker";
import { intlLocale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import { statFigures, type StatKey } from "@/lib/site";

/**
 * Four headline numbers in a hairline-framed band (after the 7ovr "Stats 1"
 * layout). Each number counts up once it scrolls into view; screen readers
 * get the final value straight away.
 */
export async function Stats() {
	const [{ stats }, locale] = await Promise.all([getDictionary(), getLocale()]);
	const numberLocale = intlLocale[locale];

	return (
		<section aria-labelledby="stats-heading" className="py-16 sm:py-20">
			<div className="container-page">
				<h2 id="stats-heading" className="sr-only">
					{stats.heading}
				</h2>
				<dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-4">
					{stats.items.map((item, index) => {
						const figure = statFigures[item.key as StatKey];
						const formatted = figure.value.toLocaleString(numberLocale, {
							minimumFractionDigits: figure.decimals,
							maximumFractionDigits: figure.decimals,
						});
						const final = `${item.prefix}${formatted}${item.suffix}`;
						return (
							<div
								key={item.label}
								className={[
									"flex flex-col-reverse items-center gap-2 px-4 py-8 text-center sm:px-6 sm:py-10",
									index % 2 === 0 ? "border-r border-border" : "",
									index < 2 ? "border-b border-border lg:border-b-0" : "",
									index === 1 ? "lg:border-r" : "",
								].join(" ")}
							>
								<dt className="text-sm text-muted-foreground text-pretty">
									{item.label}
								</dt>
								<dd className="text-4xl font-bold tracking-tight sm:text-5xl">
									<span className="sr-only">{final}</span>
									{/* The gradient sits on the ticker itself: Safari does not
									    paint a parent's background-clip: text into it. */}
									<NumberTicker
										aria-hidden
										value={figure.value}
										decimalPlaces={figure.decimals}
										prefix={item.prefix}
										suffix={item.suffix}
										locale={numberLocale}
										className="text-gradient tracking-tight"
									/>
								</dd>
							</div>
						);
					})}
				</dl>
			</div>
		</section>
	);
}
