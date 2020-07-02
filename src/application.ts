// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {GitHubContext, Parameters} from "./types";
import {suggest} from "./bin/code-suggester";
import { execSync } from "child_process";
import { makeCLIChanges } from "./get-changes";

  async function run() {
    try {
      const gitHubContext: GitHubContext = {
        prDescription: "Test-PR",
        prTitle: "Test-PR",
        mainRepo: "HelloWorld",
        mainOwner: "Kristie-Tom-Test",
        writePermissions: false,
        branchName: "Test-branch",
        workerOwner: "TomKristie"
    }
    execSync("echo 'Hello world' > test-file.txt");
    const changes = await makeCLIChanges();
    const params: Parameters = {
      gitHubContext,
      changes
    }
    await suggest(params);

    } finally {
      //execSync("rm test-file.txt");
    }
}

run();
