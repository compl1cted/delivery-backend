import { DynamicModule, Module, Provider } from "@nestjs/common";
import { PaymentProviders } from "./payment.provider";
import Stripe from "stripe";
import { STRIPE_CLIENT } from "./payment.consts";

@Module({
    imports: [],
    providers: [...PaymentProviders],
})
export class PaymentModule {
    static forRoot(apiKey: string, config: Stripe.StripeConfig): DynamicModule {
        const stripe = new Stripe(apiKey, config);

        const stripeProvider: Provider = {
            provide: STRIPE_CLIENT,
            useValue: stripe
        };

        return { 
            module: PaymentModule,
            providers: [stripeProvider],
            exports: [stripeProvider],
            global: true
         };
    }
}