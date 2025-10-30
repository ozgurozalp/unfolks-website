import { cookies } from "next/headers";
import { PromoAdClient } from "./promo-ad";

export async function PromoAd() {
	const cookieStore = await cookies();
	const isClosed = cookieStore.get("rps-promo-closed")?.value === "true";

	// Don't render if already closed
	if (isClosed) {
		return null;
	}

	return <PromoAdClient />;
}

