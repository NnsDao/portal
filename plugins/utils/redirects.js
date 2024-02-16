const redirects = `

  # external redirects (/from -> https://.../to/)
  /docs/token-holders/seed-donations.html https://wiki.internetcomputer.org/wiki/How-To:_Claim_neurons_for_seed_participants
  /deck-main https://deck.internetcomputer.org
  /live-sessions https://dfinity.org/events-and-news/#videos-live-sessions

  # .html file internal redirects (/../from.html -> to)
  /docs/developers-guide/working-with-canisters.html /docs/current/developer-docs/smart-contracts/maintain/settings

  # regular internal redirects (from -> to)
  /docs/current/references/motoko-ref/* /docs/current/motoko/main/base/:splat
  /features/green /capabilities/sustainability
  /features /capabilities
  /openchat /ois
  /howitworks /how-it-works
  /showcase /ecosystem
  /docs/videos-tutorials /developers
  /docs /docs/current/home
  /docs/current/ /docs/current/home
  /docs/current/concepts/bitcoin-integration /bitcoin-integration
  /docs/current/developer-docs/ic-overview /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/production/computation-and-storage-costs /docs/current/developer-docs/gas-cost
  /docs/current/developer-docs/deploy/computation-and-storage-costs /docs/current/developer-docs/gas-cost
  /docs/current/ic-overview  /docs/current/home
  /docs/download /docs/current/developer-docs/getting-started/install/
  /docs/http-middleware /docs/current/home
  /docs/introduction/welcome /docs/current/home
  /docs/operators-guide/ops-guide /docs/current/home
  /docs/search /docs/current/home
  /docs/support /docs/current/home
  /docs/samples /samples
  /docs/samples/codelabs /samples
  /docs/samples/codelabs/data-persistence /samples
  /docs/samples/codelabs/minimalistic-motoko-dapp /samples
  /docs/samples/codelabs/minimalistic-rust-dapp /samples
  /docs/samples/codelabs/simple-nft /samples
  /docs/samples/codelabs/static-website /samples
  /docs/samples/* /samples
  /docs/security-best-practices/introduction /docs/current/developer-docs/security/general-security-best-practices
  /docs/current/developer-docs/setup/default-wallet /docs/current/developer-docs/getting-started/cycles/cycles-wallet
  /docs/current/tokenomics/sns/tokenomics /docs/current/developer-docs/integrations/sns/tokenomics/
  /docs/current/developer-docs/integrations/http_requests/http_requests-how-it-works /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-how-it-works
  /docs/current/developer-docs/integrations/sns/tokenomics/sns-intro-tokens /docs/current/developer-docs/integrations/sns/tokenomics/
  /docs/current/developer-docs/integrations/sns/tokenomics/tokenomics /docs/current/developer-docs/integrations/sns/tokenomics/tokenomics-intro
  /docs/rust-guide/rust-intro /docs/current/developer-docs/backend/rust/
  /docs/languages/languages-overview /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/current/developer-docs/frontend/my-contacts /docs/current/developer-docs/frontend/add-stylesheet
  /docs/ic-interface-spec /docs/current/references/ic-interface-spec
  /docs/interface-spec /docs/current/references/ic-interface-spec
  /docs/current/developer-docs/updates/computation-and-storage-costs /docs/current/developer-docs/gas-cost
  /docs/current/developer-docs/updates/release-notes/ /docs/current/other/updates/release-notes/
  /docs/current/developer-docs/quickstart/local-quickstart /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup/install/index.mdx /docs/current/developer-docs/getting-started/install/
  
  /docs/candid-guide /docs/current/developer-docs/smart-contracts/candid/
  /docs/candid-guide/candid /docs/current/developer-docs/smart-contracts/candid/candid-concepts
  /docs/candid-guide/candid-intro /docs/current/developer-docs/smart-contracts/candid/
  /docs/candid-guide/candid-ref /docs/current/references/candid-ref
  /docs/candid-guide/candid-types /docs/current/references/candid-ref
  /docs/current/developer-docs/build/candid/candid-intro /docs/current/developer-docs/smart-contracts/candid/
  /docs/current/developer-docs/build/candid/candid-howto /docs/current/developer-docs/smart-contracts/candid/candid-howto 
  
  /docs/current/developer-docs/build/ /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/current/developer-docs/build/candid/candid-concepts /docs/current/developer-docs/smart-contracts/candid/candid-concepts
  /docs/current/developer-docs/build/languages/other-languages/* /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/current/developer-docs/build/languages/work-with-languages /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/current/developer-docs/build/using-an-agent /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/current/developer-docs/build/backend/reproducible-builds /docs/current/developer-docs/smart-contracts/test/reproducible-builds
  /docs/current/developer-docs/build/cdks/ /docs/current/motoko/main/about-this-guide
  /docs/current/developer-docs/build/frontend/custom-frontend /docs/current/developer-docs/frontend/custom-frontend
  /docs/current/developer-docs/build/frontend/webpack-config /docs/current/developer-docs/frontend/#modifying-the-webpack-configuration
  /docs/current/developer-docs/build/install-upgrade-remove /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/build/languages/rust/* /docs/current/developer-docs/backend/rust/
  /docs/current/developer-docs/build/project-setup/cycles-wallet /docs/current/developer-docs/getting-started/cycles/cycles-wallet
  /docs/current/developer-docs/build/project-setup/manage-canisters /docs/current/developer-docs/smart-contracts/maintain/settings
  /docs/current/developer-docs/build/project-setup/design-dapps /docs/current/developer-docs/backend/design-dapps
  /docs/current/developer-docs/build/troubleshooting /docs/current/developer-docs/smart-contracts/test/troubleshooting
  /docs/current/developer-docs/build/agents/ /docs/current/developer-docs/developer-tools/off-chain/agents/overview
  /docs/current/developer-docs/build/agents/javascript/javascript-intro /docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent
  /docs/current/developer-docs/build/agents/javascript/*  /docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent
  /docs/current/developer-docs/build/languages/candid/* /docs/current/developer-docs/smart-contracts/candid/:splat
  /docs/current/developer-docs/build/cdks/motoko-dfinity/* /docs/current/motoko/main/:splat
  /docs/current/developer-docs/build/cdks/cdk-rs-dfinity/*  /docs/current/developer-docs/backend/rust/:splat
  /docs/current/developer-docs/build/languages/motoko/* /docs/current/motoko/main/:splat
  
  /docs/developers-guide/ /docs/current/motoko/main/about-this-guide
  /docs/developers-guide/about-this-guide /docs/current/motoko/main/about-this-guide
  /docs/developers-guide/basic-syntax-rules /docs/current/motoko/main/language-manual
  /docs/developers-guide/concepts/bitcoin-integration /bitcoin-integration
  /docs/developers-guide/concepts/concepts-intro /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/developers-guide/customize-projects /docs/current/developer-docs/smart-contracts/build
  /docs/developers-guide/default-wallet /docs/current/developer-docs/getting-started/cycles/cycles-wallet
  /docs/developers-guide/design-apps /docs/current/developer-docs/backend/design-dapps
  /docs/developers-guide/glossary /docs/current/references/glossary
  /docs/developers-guide/install-upgrade-remove /docs/current/developer-docs/getting-started/install/
  /docs/developers-guide/lang-service-ide /docs/current/developer-docs/developer-tools/ide/vs-code
  /docs/developers-guide/reinstalling-dfx /docs/current/developer-docs/getting-started/install/
  /docs/developers-guide/sample-apps /samples
  /docs/developers-guide/sdk-guide /docs/current/developer-docs/getting-started/install/
  /docs/developers-guide/troubleshooting /docs/current/developer-docs/smart-contracts/test/troubleshooting
  /docs/developers-guide/tutorials-intro /docs/current/developer-docs/backend/motoko/
  /docs/developers-guide/tutorials/custom-frontend /docs/current/developer-docs/frontend/custom-frontend
  /docs/developers-guide/tutorials/my-contacts /docs/current/developer-docs/frontend/add-stylesheet
  /docs/developers-guide/webpack-config /docs/current/developer-docs/frontend/
  /docs/developers-guide/work-with-languages /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/developers-guide/working-with-canisters /docs/current/developer-docs/smart-contracts/maintain/settings
  
  /docs/quickstart/1-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/2-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/3-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/4-2-convert-icp-to-cycles /docs/current/tutorials/developer-journey/
  /docs/quickstart/4-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/5-quickstart /docs/current/tutorials/developer-journey/
  /docs/quickstart/cycles-faucet /docs/current/developer-docs/getting-started/cycles/cycles-faucet
  /docs/quickstart/local-quickstart /docs/current/developer-docs/getting-started/deploy/local
  /docs/quickstart/network-quickstart /docs/current/developer-docs/getting-started/deploy/mainnet
  /docs/quickstart/quickstart-intro /docs/current/tutorials/developer-journey/
  /docs/quickstart/newcomers /docs/current/home
  /docs/current/developer-docs/quickstart/* /docs/current/tutorials/developer-journey/
  /developers-guide/quickstart /docs/current/tutorials/developer-journey/
  /docs/current/developer-docs/quickstart/cycles-faucet /docs/current/developer-docs/getting-started/cycles/cycles-faucet
  /docs/current/developer-docs/quickstart/windows-wsl /docs/current/developer-docs/getting-started/install/windows-wsl
  /docs/current/developer-docs/quickstart/hello10mins/ /docs/current/tutorials/developer-journey/
  
  /docs/rosetta-api/ledger /docs/current/developer-docs/integrations/ledger/
  /docs/rosetta-api/ledger-local-setup /docs/current/developer-docs/integrations/ledger/ledger-local-setup
  /docs/integration/ledger-quick-start /docs/current/developer-docs/integrations/ledger/
  /docs/current/developer-docs/functionality/ledger/* /docs/current/developer-docs/integrations/ledger/ledger-local-setup
  
  /docs/base-libraries/* /docs/current/motoko/main/base/:splat
  /base-libraries/* /docs/current/motoko/main/base/:splat
  /docs/current/developer-docs/best-practices/* /docs/current/developer-docs/use-cases/:splat
  /docs/current/developer-docs/deploy/* /docs/current/developer-docs/production/:splat
  /docs/current/references/security/* /docs/current/developer-docs/security/general-security-best-practices
  /docs/current/tokenomics/nns/community-fund /docs/current/tokenomics/nns/neurons-fund
  /docs/current/tokenomics/sns/* /docs/current/developer-docs/integrations/sns/tokenomics/:splat
  /docs/developers-guide/cli-reference/* /docs/current/references/cli-reference/:splat
  /docs/developers-guide/concepts/* /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/developers-guide/tutorials/* /docs/current/developer-docs/backend/motoko/:splat
  /docs/ic-identity-guide/* /docs/current/tokenomics/identity-auth/:splat
  /docs/language-guide/* /docs/current/motoko/main/:splat
  /docs/release-notes/* /docs/current/other/updates/release-notes/:splat
  /docs/rosetta-api/* /docs/current/developer-docs/integrations/rosetta/:splat
  /docs/rust-guide/* /docs/current/developer-docs/backend/rust/:splat
  /docs/security-best-practices/* /docs/current/developer-docs/security/general-security-best-practices
  /docs/token-holders/* /docs/current/tokenomics/token-holders/:splat
  /features/* /capabilities/:splat
  /howitworks/* /how-it-works/:splat
  /docs/current/developer-docs/build/backend/* /docs/current/developer-docs/backend/motoko/:splat
  /sustainability /capabilities/sustainability
  /docs/current/tutorials/deploy_sample_app /docs/current/tutorials/developer-journey/
  /install.sh)" /docs/current/developer-docs/getting-started/install/
  /docs/current/motoko/intro/ /docs/current/motoko/main/motoko
  /docs/current/tutorials/create_your_first_app/ /docs/current/tutorials/developer-journey/
  /docs/quickstart/quickstart-intro.html /docs/current/developer-docs/getting-started/install/
  /docs/ic-identity-guide/auth-how-to.html /docs/current/developer-docs/integrations/internet-identity/integrate-identity/
  /docs/current/developer-docs/build/agents/agent-dfinity	/docs/current/developer-docs/developer-tools/off-chain/agents/overview
  /docs/current/tokenomics/identity-auth/what-is-ic-identity /docs/current/developer-docs/integrations/internet-identity/overview
  /docs/quickstart/local-quickstart.html /docs/current/developer-docs/getting-started/install/
  /language-guide/ /docs/current/tutorials/developer-journey/level-0/intro-languages
  /docs/current/developer-docs/build/cdks/cdk-rs-dfinity/rust-quickstart /docs/current/developer-docs/backend/rust/
  /docs/quickstart/network-quickstart.html /docs/current/developer-docs/getting-started/install/
  /docs/token-holders/nns-app-quickstart.html /docs/current/tokenomics/token-holders/nns-app-quickstart
  /developers-guide/quickstart.html /docs/current/tutorials/developer-journey/
  /docs/current/tokenomics/identity-auth/auth-how-to /docs/current/developer-docs/integrations/internet-identity/overview
  /docs/developers-guide/tutorials-intro.html /docs/current/tutorials/developer-journey/
  /docs/quickstart/quickstart.html /docs/current/developer-docs/getting-started/install/
  /apis/site/proxy /docs/current/references/http-gateway-protocol-spec
  /docs/developers-guide/concepts/what-is-ic /docs/current/developer-docs/getting-started/overview-of-icp
  /language-guide/index /docs/current/tutorials/developer-journey/level-0/intro-languages
  /docs/current/developer-docs/production/instruction-limits /docs/current/developer-docs/smart-contracts/maintain/resource-limits
  /docs/current/developer-docs/backend/resource-limits /docs/current/developer-docs/smart-contracts/maintain/resource-limits
  /docs/current/concepts/data-centers /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/build/languages/rust/rust-intro /docs/current/developer-docs/backend/rust/
  /docs/current/developer-docs/build/languages/motoko /docs/current/motoko/main/motoko
  /docs/current/developer-docs/integrations/sns/launching/launch-summary /docs/current/developer-docs/integrations/sns/launching/launch-summary-1proposal
  /docs/current/developer-docs/integrations/sns/launching/launch-steps /docs/current/developer-docs/integrations/sns/launching/launch-steps-1proposal
  /docs/current/developer-docs/frontend/javascript-frontend /docs/current/developer-docs/frontend/boilerplate-frontend
  /docs/current/developer-docs/frontend/react-frontend /docs/current/developer-docs/frontend/boilerplate-frontend
  /docs/current/developer-docs/frontend/svelte-frontend /docs/current/developer-docs/frontend/boilerplate-frontend
  /docs/current/developer-docs/frontend/vue-frontend /docs/current/developer-docs/frontend/boilerplate-frontend
  /docs/current/developer-docs/setup/cycles/index /docs/current/developer-docs/getting-started/cycles/cycles-wallet
  /docs/current/developer-docs/setup/cycles /docs/current/developer-docs/getting-started/cycles/cycles-wallet
  /docs/current/concepts/index /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/concepts /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/backend/candid/index /docs/current/developer-docs/smart-contracts/candid/candid-concepts
  /docs/current/developer-docs/integrations/https-outcalls/index /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-how-to-use
  /docs/current/developer-docs/integrations/https-outcalls /docs/current/developer-docs/integrations/https-outcalls/https-outcalls-how-to-use
  /docs/current/developer-docs/security/index /docs/current/developer-docs/security/general-security-best-practices
  /docs/current/developer-docs/security /docs/current/developer-docs/security/general-security-best-practices
  /docs/current/developer-docs/integrations/index /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/integrations /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/setup/index /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup/quickstart /docs/current/developer-docs/getting-started/install/
  /docs/current/tutorials/index /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/tutorials/ /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/backend/eu-subnets /docs/current/developer-docs/backend/subnet-types
  /docs/current/samples/* /docs/current/samples/overview
  /docs/current/developer-docs/production/deploying-and-upgrading /docs/current/developer-docs/smart-contracts/deploy/overview
  /docs/current/developer-docs/index /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/concepts/what-is-ic /docs/current/developer-docs/getting-started/overview-of-icp
  /docs/current/developer-docs/setup/development-workflow /docs/current/developer-docs/getting-started/development-workflow
  /docs/current/developer-docs/setup/hello-world /docs/current/developer-docs/getting-started/hello-world
  /docs/current/developer-docs/setup/install/ /docs/current/developer-docs/getting-started/install/
  /docs/current/developer-docs/setup/accounts /docs/current/developer-docs/getting-started/accounts
  /docs/current/developer-docs/setup/cycles/cycles-faucet /docs/current/developer-docs/getting-started/cycles/cycles-faucet
  /docs/current/developer-docs/setup/cycles/cycles-wallet /docs/current/developer-docs/getting-started/cycles/cycles-wallet
  /docs/current/developer-docs/setup/cycles/converting_icp_tokens_into_cycles /docs/current/developer-docs/getting-started/cycles/converting_icp_tokens_into_cycles
  /docs/current/developer-docs/setup/first-canister /docs/current/developer-docs/getting-started/default-template
  /docs/current/developer-docs/setup/deploy-locally /docs/current/developer-docs/getting-started/deploy/local
  /docs/current/developer-docs/setup/deploy-mainnet /docs/current/developer-docs/getting-started/deploy/mainnet
  /docs/current/developer-docs/production/best-practices /docs/current/developer-docs/smart-contracts/best-practices/general
  /docs/current/references/dev-tools-overview /docs/current/developer-docs/developer-tools/dev-tools-overview
  /docs/current/references/cdks /docs/current/developer-docs/developer-tools/on-chain/cdks
  /docs/current/developer-docs/agents/ /docs/current/developer-docs/developer-tools/off-chain/agents/overview
  /docs/current/developer-docs/agents/javascript-intro /docs/current/developer-docs/developer-tools/off-chain/agents/javascript-agent
  /docs/current/developer-docs/agents/nodejs /docs/current/developer-docs/developer-tools/off-chain/agents/nodejs
  /docs/current/developer-docs/agents/ic-agent-dfinity /docs/current/developer-docs/developer-tools/off-chain/agents/rust-agent
  /docs/current/references/gitpod /docs/current/developer-docs/developer-tools/ide/gitpod
  /docs/current/developer-docs/setup/playground /docs/current/developer-docs/developer-tools/ide/playground
  /docs/current/developer-docs/setup/vs-code /docs/current/developer-docs/developer-tools/ide/vs-code
  /docs/current/developer-docs/setup/react-quickstart /docs/current/developer-docs/getting-started/quickstart/react-quickstart
  /docs/current/references/cli-reference/* /docs/current/developer-docs/developer-tools/cli-tools/cli-reference/index
  /docs/current/references/dfxvm/* /docs/current/developer-docs/developer-tools/cli-tools/dfxvm/docs/cli-reference/dfx/dfx
  /docs/current/references/quill-cli-reference/* /docs/current/developer-docs/developer-tools/cli-tools/quill-cli-reference/index
  /docs/current/developer-docs/backend/choosing-language /docs/current/developer-docs/smart-contracts/choosing-language 
  /docs/current/developer-docs/backend/candid/candid-concepts /docs/current/developer-docs/smart-contracts/candid/candid-concepts
  /docs/current/developer-docs/backend/candid/index /docs/current/developer-docs/smart-contracts/candid/
  /docs/current/developer-docs/backend/candid/candid-howto /docs/current/developer-docs/smart-contracts/candid/candid-howto 
  /docs/current/developer-docs/backend/candid/generating-candid /docs/current/developer-docs/backend/rust/generating-candid
  /docs/current/developer-docs/setup/deploy /docs/current/developer-docs/smart-contracts/deploy/overview
  /docs/current/developer-docs/production/larger-wasm /docs/current/developer-docs/smart-contracts/deploy/larger-wasm
  /docs/current/developer-docs/production/social-sharing /docs/current/developer-docs/smart-contracts/deploy/sharing
  /docs/current/developer-docs/setup/delete /docs/current/developer-docs/smart-contracts/maintain/delete
  /docs/current/developer-docs/production/canister-history /docs/current/developer-docs/smart-contracts/maintain/history
  /docs/current/developer-docs/setup/build /docs/current/developer-docs/smart-contracts/build
  /docs/current/developer-docs/setup/pulling-canister-dependencies /docs/current/developer-docs/smart-contracts/maintain/import
  /docs/current/developer-docs/production/canister-recovery /docs/current/developer-docs/smart-contracts/maintain/recovery
  /docs/current/developer-docs/setup/state /docs/current/developer-docs/smart-contracts/maintain/state
  /docs/current/developer-docs/setup/manage-canisters /docs/current/developer-docs/smart-contracts/maintain/settings
  /docs/current/developer-docs/production/storage /docs/current/developer-docs/smart-contracts/maintain/storage
  /docs/current/developer-docs/setup/upgrade /docs/current/developer-docs/smart-contracts/maintain/upgrade
  /docs/current/developer-docs/production/resource-limits /docs/current/developer-docs/smart-contracts/maintain/resource-limits
  /docs/current/developer-docs/setup/manage-projects /docs/current/developer-docs/smart-contracts/build
  /docs/current/developer-docs/production/topping-up-canister /docs/current/developer-docs/smart-contracts/topping-up/topping-up-canister
  /docs/current/developer-docs/getting-started/cycles/cycles_management_services /docs/current/developer-docs/smart-contracts/topping-up/cycles_management_services
  /docs/current/developer-docs/setup/pocket-ic /docs/current/developer-docs/smart-contracts/test/pocket-ic
  /docs/current/developer-docs/production/staging-environment /docs/current/developer-docs/smart-contracts/test/staging-environment
  /docs/current/developer-docs/backend/reproducible-builds /docs/current/developer-docs/smart-contracts/test/reproducible-builds
  /docs/current/developer-docs/backend/troubleshooting /docs/current/developer-docs/smart-contracts/test/troubleshooting
  /docs/current/developer-docs/integrations/t-ecdsa /docs/current/developer-docs/smart-contracts/encryption/t-ecdsa
  /docs/current/developer-docs/integrations/vetkeys/ /docs/current/developer-docs/smart-contracts/encryption/vetkeys
  /docs/current/developer-docs/integrations/vetkeys/using-vetkeys /docs/current/developer-docs/smart-contracts/encryption/using-vetkeys
  /docs/current/developer-docs/integrations/composite-query /docs/current/developer-docs/smart-contracts/advanced-features/composite-query
  /docs/current/developer-docs/backend/periodic-tasks /docs/current/developer-docs/smart-contracts/advanced-features/periodic-tasks
  /docs/current/developer-docs/setup/best-practices/architecture /docs/current/developer-docs/smart-contracts/best-practices/architecture
  /docs/current/developer-docs/setup/best-practices/general /docs/current/developer-docs/smart-contracts/best-practices/general
  /docs/current/developer-docs/setup/best-practices/storage /docs/current/developer-docs/smart-contracts/best-practices/storage
  /docs/current/developer-docs/setup/best-practices/troubleshooting /docs/current/developer-docs/smart-contracts/best-practices/troubleshooting
  `
  .split(/[\r\n]+/)
  .map((line) => line.trim().replace(/^#.*$/, "").trim())
  .filter((l) => l.length > 0)
  .map((l) => l.split(/\s+/));

function isSplat(redirect) {
  return redirect[0].includes("/*");
}

function isExternal(redirect) {
  return redirect[1].startsWith("http");
}

function isExactUrl(redirect) {
  return redirect[0].endsWith(".html");
}

function ruleToRedirect(rule) {
  const from = rule[0].replace(/(.+)\/$/, "$1");
  const to = rule[1];
  return {
    from,
    to,
  };
}

exports.getRedirects = function () {
  return redirects
    .filter((r) => !isSplat(r) && !isExternal(r) && !isExactUrl(r))
    .map(ruleToRedirect)
    .map((r) => ({
      to: r.to.replace(/#.+$/, ""),
      from: r.from,
    }));
};

exports.getExternalRedirects = function () {
  return redirects.filter((r) => isExternal(r)).map(ruleToRedirect);
};

exports.getExactUrlRedirects = function () {
  return redirects
    .filter((r) => !isExternal(r) && isExactUrl(r))
    .map(ruleToRedirect);
};

exports.getSplatRedirects = function (existingUrl) {
  const urls = [];

  for (const redirect of redirects.filter(
    (r) => isSplat(r) && !isExternal(r)
  )) {
    const trimmedSource = redirect[0].replace("/*", "/");

    if (redirect[1].includes(":splat")) {
      const trimmedDestination = redirect[1].replace(":splat", "");
      if (existingUrl.startsWith(trimmedDestination)) {
        const completeSourceUrl = existingUrl.replace(
          trimmedDestination,
          trimmedSource
        );
        urls.push(completeSourceUrl);
      }
    }
  }

  return urls;
};
