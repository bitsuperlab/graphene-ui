import React from "react";
import AccountStore from "stores/AccountStore";
import AssetStore from "stores/AssetStore";
import SettingsStore from "stores/SettingsStore";

import AltContainer from "alt-container";
import AccountMigrateSelector from "./AccountMigrateSelector";
import Immutable from "immutable";

class AccountMigrateSelectorContainer extends React.Component {
    render() {
        return (
            <AltContainer
                stores={[AccountStore, SettingsStore]}
                inject={{
                /** bind to chain state will use this to trigger updates to the dashboard */
                // resolvedLinkedAccounts: () => {
                    //console.log( "Linked Accounts: ", AccountStore.getState().linkedAccounts,  AccountStore.getState().linkedAccounts.toJS() );
                    // return Immutable.List(AccountStore.getState().linkedAccounts);
                // },
                /** the dashboard only really needs the list of accounts */
                linkedAccounts: () => {
                  return AccountStore.getState().linkedAccounts;
                }
              }}>
                <AccountMigrateSelector />
            </AltContainer>
        );
    }
}

export default AccountMigrateSelectorContainer;
