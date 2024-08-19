<!-- Install Clerk -->
<!-- LangChain -->
<!-- Pinecone -->
<!-- Firebase -->
<!-- FirebasAdmin -->
<!-- OpenAI -->
<!-- Gemini -->
<!-- Shadcn -->
<!-- daisyui -->
<!-- Stripe, Stripe CLI -->


<!-- 
Listen to Stripe events


Add an endpoint

Test in a local environment
Use Stripe CLI to simulate Stripe events in your local environment or learn more about Webhooks.
1
incomplete step 1
Download the CLI and log in with your Stripe account

stripe login

Copy to clipboard
2
incomplete step 2
Forward events to your webhook

stripe listen --forward-to localhost:4242/webhook

Copy to clipboard
3
incomplete step 3
Trigger events with the CLI

stripe trigger payment_intent.succeeded

Copy to clipboard

 -->


 <!-- Stripe Test Card - 424242424242424242 -->


 <!-- 
 ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ touch cors.json
ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ vi cors.json
ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ ls
cors.json  README-cloudshell.txt
ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ cat cos.json
cat: cos.json: No such file or directory
ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ cat cors.json
[   
    {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
    }
]
ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ gsutil cors set cors.json gs://notion-clone-598ce.appspot.com
Setting CORS on gs://notion-clone-598ce.appspot.com/...
ahamchukwuemeka2@cloudshell:~ (notion-clone-598ce)$ 
  -->