const descriptions = [
  [
    '91, 57, Private, 249977, Assoc - voc, 11, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '92, 37, Private, 286730, Some - college, 10, Divorced, Craft - repair, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '93, 28, Private, 212563, Some - college, 10, Divorced, Machine - op - inspct, Unmarried, Black, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '95, 34, Local - gov, 226296, Bachelors, 13, Married - civ - spouse, Protective - serv, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '96, 29, Local - gov, 115585, Some - college, 10, Never - married, Handlers - cleaners, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '97, 48, Self - emp - not - inc, 191277, Doctorate, 16, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 1902, 60, United - States,> 50K'
  ],
  [
    '98, 37, Private, 202683, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 48, United - States,> 50K'
  ],
  [
    '99, 48, Private, 171095, Assoc - acdm, 12, Divorced, Exec - managerial, Unmarried, White, Female, 0, 0, 40, England,<= 50K'
  ],
  [
    '100, 32, Federal - gov, 249409, HS - grad, 9, Never - married, Other - service, Own - child, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '101, 76, Private, 124191, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '102, 44, Private, 198282, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 15024, 0, 60, United - States,> 50K'
  ],
  [
    '103, 47, Self - emp - not - inc, 149116, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '104, 20, Private, 188300, Some - college, 10, Never - married, Tech - support, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '105, 29, Private, 103432, HS - grad, 9, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '106, 32, Self - emp - inc, 317660, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 7688, 0, 40, United - States,> 50K'
  ],
  [
    '107, 17, Private, 304873, 10th, 6, Never - married, Sales, Own - child, White, Female, 34095, 0, 32, United - States,<= 50K'
  ],
  [
    '108, 30, Private, 194901, 11th, 7, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '109, 31, Local - gov, 189265, HS - grad, 9, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '110, 42, Private, 124692, HS - grad, 9, Married - civ - spouse, Handlers - cleaners, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '111, 24, Private, 432376, Bachelors, 13, Never - married, Sales, Other - relative, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '112, 38, Private, 65324, Prof - school, 15, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '113, 56, Self - emp - not - inc, 335605, HS - grad, 9, Married - civ - spouse, Other - service, Husband, White, Male, 0, 1887, 50, Canada,> 50K'
  ],
  [
    '114, 28, Private, 377869, Some - college, 10, Married - civ - spouse, Sales, Wife, White, Female, 4064, 0, 25, United - States,<= 50K'
  ],
  [
    '115, 36, Private, 102864, HS - grad, 9, Never - married, Machine - op - inspct, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '116, 53, Private, 95647, 9th, 5, Married - civ - spouse, Handlers - cleaners, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '117, 56, Self - emp - inc, 303090, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '118, 49, Local - gov, 197371, Assoc - voc, 11, Married - civ - spouse, Craft - repair, Husband, Black, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '119, 55, Private, 247552, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 56, United - States,<= 50K'
  ],
  [
    '120, 22, Private, 102632, HS - grad, 9, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 41, United - States,<= 50K'
  ],
  [
    '121, 21, Private, 199915, Some - college, 10, Never - married, Other - service, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '122, 40, Private, 118853, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '123, 30, Private, 77143, Bachelors, 13, Never - married, Exec - managerial, Own - child, Black, Male, 0, 0, 40, Germany,<= 50K'
  ],
  [
    '124, 29, State - gov, 267989, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '125, 19, Private, 301606, Some - college, 10, Never - married, Other - service, Own - child, Black, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '126, 47, Private, 287828, Bachelors, 13, Married - civ - spouse, Exec - managerial, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '127, 20, Private, 111697, Some - college, 10, Never - married, Adm - clerical, Own - child, White, Female, 0, 1719, 28, United - States,<= 50K'
  ],
  [
    '128, 31, Private, 114937, Assoc - acdm, 12, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '129, 35, Private, 129305, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '130, 39, Private, 365739, Some - college, 10, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '131, 28, Private, 69621, Assoc - acdm, 12, Never - married, Sales, Not -in -family, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '132, 24, Private, 43323, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 1762, 40, United - States,<= 50K'
  ],
  [
    '133, 38, Self - emp - not - inc, 120985, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 4386, 0, 35, United - States,<= 50K'
  ],
  [
    '134, 37, Private, 254202, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '135, 46, Private, 146195, Assoc - acdm, 12, Divorced, Tech - support, Not -in -family, Black, Female, 0, 0, 36, United - States,<= 50K'
  ],
  [
    '136, 38, Federal - gov, 125933, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, Iran,> 50K'
  ],
  [
    '137, 43, Self - emp - not - inc, 56920, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '138, 27, Private, 163127, Assoc - voc, 11, Married - civ - spouse, Adm - clerical, Wife, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '139, 20, Private, 34310, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '140, 49, Private, 81973, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, Asian - Pac - Islander, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '141, 61, Self - emp - inc, 66614, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '142, 27, Private, 232782, Some - college, 10, Never - married, Sales, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '143, 19, Private, 316868, Some - college, 10, Never - married, Other - service, Own - child, White, Male, 0, 0, 30, Mexico,<= 50K'
  ],
  [
    '144, 45, Private, 196584, Assoc - voc, 11, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 1564, 40, United - States,> 50K'
  ],
  [
    '145, 70, Private, 105376, Some - college, 10, Never - married, Tech - support, Other - relative, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '146, 31, Private, 185814, HS - grad, 9, Never - married, Transport - moving, Unmarried, Black, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '147, 22, Private, 175374, Some - college, 10, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '148, 36, Private, 108293, HS - grad, 9, Widowed, Other - service, Unmarried, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '149, 64, Private, 181232, 11th, 7, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 2179, 40, United - States,<= 50K'
  ],
  [
    '150, 43, Private, 174662, Some - college, 10, Divorced, Sales, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '151, 47, Local - gov, 186009, Some - college, 10, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 38, Mexico,<= 50K'
  ],
  [
    '152, 34, Private, 198183, HS - grad, 9, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '153, 33, Private, 163003, Bachelors, 13, Never - married, Exec - managerial, Other - relative, Asian - Pac - Islander, Female, 0, 0, 40, Philippines,<= 50K'
  ],
  [
    '154, 21, Private, 296158, HS - grad, 9, Never - married, Craft - repair, Own - child, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '155, 52, Private, 252903, HS - grad, 9, Divorced, Sales, Not -in -family, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '156, 48, Private, 187715, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 46, United - States,<= 50K'
  ],
  [
    '157, 23, Private, 214542, Bachelors, 13, Never - married, Handlers - cleaners, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '158, 71, Self - emp - not - inc, 494223, Some - college, 10, Separated, Sales, Unmarried, Black, Male, 0, 1816, 2, United - States,<= 50K'
  ],
  [
    '159, 29, Private, 191535, HS - grad, 9, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '160, 42, Private, 228456, Bachelors, 13, Separated, Other - service, Other - relative, Black, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '161, 68, Private, 38317, 1st - 4th, 2, Divorced, Sales, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '162, 25, Private, 252752, HS - grad, 9, Never - married, Other - service, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '163, 44, Self - emp - inc, 78374, Masters, 14, Divorced, Exec - managerial, Unmarried, Asian - Pac - Islander, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '164, 28, Private, 88419, HS - grad, 9, Never - married, Exec - managerial, Not -in -family, Asian - Pac - Islander, Female, 0, 0, 40, England,<= 50K'
  ],
  [
    '165, 45, Self - emp - not - inc, 201080, Masters, 14, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '166, 36, Private, 207157, Some - college, 10, Divorced, Other - service, Unmarried, White, Female, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '167, 39, Federal - gov, 235485, Assoc - acdm, 12, Never - married, Exec - managerial, Not -in -family, White, Male, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '168, 46, State - gov, 102628, Masters, 14, Widowed, Protective - serv, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '169, 18, Private, 25828, 11th, 7, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 16, United - States,<= 50K'
  ],
  [
    '170, 66, Local - gov, 54826, Assoc - voc, 11, Widowed, Prof - specialty, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '171, 27, Private, 124953, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Male, 0, 1980, 40, United - States,<= 50K'
  ],
  [
    '172, 28, State - gov, 175325, HS - grad, 9, Married - civ - spouse, Protective - serv, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '173, 51, Private, 96062, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 1977, 40, United - States,> 50K'
  ],
  [
    '174, 27, Private, 428030, Bachelors, 13, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '175, 28, State - gov, 149624, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '176, 27, Private, 253814, HS - grad, 9, Married - spouse - absent, Sales, Unmarried, White, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '177, 21, Private, 312956, HS - grad, 9, Never - married, Craft - repair, Own - child, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '178, 34, Private, 483777, HS - grad, 9, Never - married, Handlers - cleaners, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '179, 18, Private, 183930, HS - grad, 9, Never - married, Other - service, Own - child, White, Male, 0, 0, 12, United - States,<= 50K'
  ],
  [
    '180, 33, Private, 37274, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 65, United - States,<= 50K'
  ],
  [
    '181, 44, Local - gov, 181344, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, Black, Male, 0, 0, 38, United - States,> 50K'
  ],
  [
    '182, 43, Private, 114580, Some - college, 10, Divorced, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '183, 30, Private, 633742, Some - college, 10, Never - married, Craft - repair, Not -in -family, Black, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '184, 40, Private, 286370, 7th - 8th, 4, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, Mexico,> 50K'
  ],
  [
    '185, 37, Federal - gov, 29054, Some - college, 10, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 42, United - States,> 50K'
  ],
  [
    '186, 34, Private, 304030, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '187, 41, Self - emp - not - inc, 143129, Bachelors, 13, Divorced, Exec - managerial, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '188, 53, Private, 135105, Bachelors, 13, Divorced, Sales, Not -in -family, White, Female, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '189, 31, Private, 99928, Masters, 14, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '190, 58, State - gov, 109567, Doctorate, 16, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 1, United - States,> 50K'
  ],
  [
    '191, 38, Private, 155222, Some - college, 10, Divorced, Machine - op - inspct, Not -in -family, Black, Female, 0, 0, 28, United - States,<= 50K'
  ],
  [
    '192, 24, Private, 159567, Some - college, 10, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '193, 41, Local - gov, 523910, Bachelors, 13, Married - civ - spouse, Craft - repair, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '194, 47, Private, 120939, Some - college, 10, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '195, 41, Federal - gov, 130760, Bachelors, 13, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '196, 23, Private, 197387, 5th - 6th, 3, Married - civ - spouse, Transport - moving, Other - relative, White, Male, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '197, 36, Private, 99374, Some - college, 10, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '198, 40, Federal - gov, 56795, Masters, 14, Never - married, Exec - managerial, Not -in -family, White, Female, 14084, 0, 55, United - States,> 50K'
  ],
  [
    '199, 35, Private, 138992, Masters, 14, Married - civ - spouse, Prof - specialty, Other - relative, White, Male, 7298, 0, 40, United - States,> 50K'
  ],
  [
    '200, 24, Self - emp - not - inc, 32921, HS - grad, 9, Never - married, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '201, 26, Private, 397317, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 1876, 40, United - States,<= 50K'
  ],
  [
    '202, 19, Private, 170653, HS - grad, 9, Never - married, Sales, Own - child, White, Male, 0, 0, 40, Italy,<= 50K'
  ],
  [
    '203, 51, Private, 259323, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '204, 42, Local - gov, 254817, Some - college, 10, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 1340, 40, United - States,<= 50K'
  ],
  [
    '205, 37, State - gov, 48211, HS - grad, 9, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '206, 18, Private, 140164, 11th, 7, Never - married, Sales, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '207, 36, Private, 128757, Bachelors, 13, Married - civ - spouse, Other - service, Husband, Black, Male, 7298, 0, 36, United - States,> 50K'
  ],
  [
    '208, 35, Private, 36270, HS - grad, 9, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '209, 58, Self - emp - inc, 210563, HS - grad, 9, Married - civ - spouse, Sales, Wife, White, Female, 15024, 0, 35, United - States,> 50K'
  ],
  [
    '210, 17, Private, 65368, 11th, 7, Never - married, Sales, Own - child, White, Female, 0, 0, 12, United - States,<= 50K'
  ],
  [
    '211, 44, Local - gov, 160943, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '212, 37, Private, 208358, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '213, 35, Private, 153790, Some - college, 10, Never - married, Sales, Not -in -family, Amer - Indian - Eskimo, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '214, 60, Private, 85815, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, Asian - Pac - Islander, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '215, 54, Self - emp - inc, 125417, 7th - 8th, 4, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '216, 37, Private, 635913, Bachelors, 13, Never - married, Exec - managerial, Not -in -family, Black, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '217, 50, Private, 313321, Assoc - acdm, 12, Divorced, Sales, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '218, 38, Private, 182609, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, Poland,<= 50K'
  ],
  [
    '219, 45, Private, 109434, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '220, 25, Private, 255004, 10th, 6, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '221, 31, Private, 197860, Some - college, 10, Married - civ - spouse, Handlers - cleaners, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '222, 64, Private, 187656, 1st - 4th, 2, Divorced, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '223, 90, Private, 51744, HS - grad, 9, Never - married, Other - service, Not -in -family, Black, Male, 0, 2206, 40, United - States,<= 50K'
  ],
  [
    '224, 54, Private, 176681, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, Black, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '225, 53, Local - gov, 140359, Preschool, 1, Never - married, Machine - op - inspct, Not -in -family, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '226, 18, Private, 243313, HS - grad, 9, Never - married, Sales, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '227, 60, Private, 24215, 10th, 6, Divorced, Sales, Not -in -family, Amer - Indian - Eskimo, Female, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '228, 66, Self - emp - not - inc, 167687, HS - grad, 9, Married - civ - spouse, Farming - fishing, Husband, White, Male, 1409, 0, 50, United - States,<= 50K'
  ],
  [
    '229, 75, Private, 314209, Assoc - voc, 11, Widowed, Adm - clerical, Not -in -family, White, Female, 0, 0, 20, Columbia,<= 50K'
  ],
  [
    '230, 65, Private, 176796, HS - grad, 9, Divorced, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '231, 35, Private, 538583, 11th, 7, Separated, Transport - moving, Not -in -family, Black, Male, 3674, 0, 40, United - States,<= 50K'
  ],
  [
    '232, 41, Private, 130408, HS - grad, 9, Divorced, Sales, Unmarried, Black, Female, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '233, 25, Private, 159732, Some - college, 10, Never - married, Adm - clerical, Not -in -family, White, Male, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '234, 33, Private, 110978, Some - college, 10, Divorced, Craft - repair, Other - relative, Other, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '235, 28, Private, 76714, Prof - school, 15, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 55, United - States,> 50K'
  ],
  [
    '236, 59, State - gov, 268700, HS - grad, 9, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '237, 40, State - gov, 170525, Some - college, 10, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '238, 41, Private, 180138, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 50, Iran,> 50K'
  ],
  [
    '239, 38, Local - gov, 115076, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 70, United - States,> 50K'
  ],
  [
    '240, 23, Private, 115458, HS - grad, 9, Never - married, Transport - moving, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '241, 40, Private, 347890, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '242, 41, Self - emp - not - inc, 196001, HS - grad, 9, Married - civ - spouse, Other - service, Wife, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '243, 24, State - gov, 273905, Assoc - acdm, 12, Married - civ - spouse, Protective - serv, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '244, 20, Private, 119156, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '245, 38, Private, 179488, Some - college, 10, Divorced, Craft - repair, Not -in -family, White, Male, 0, 1741, 40, United - States,<= 50K'
  ],
  [
    '246, 56, Private, 203580, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '247, 58, Private, 236596, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '248, 32, Private, 183916, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 34, United - States,<= 50K'
  ],
  [
    '249, 40, Private, 207578, Assoc - acdm, 12, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 1977, 60, United - States,> 50K'
  ],
  [
    '250, 45, Private, 153141, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '251, 41, Private, 112763, Prof - school, 15, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '252, 42, Private, 390781, Bachelors, 13, Married - civ - spouse, Adm - clerical, Wife, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '253, 59, Local - gov, 171328, 10th, 6, Widowed, Other - service, Unmarried, Black, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '254, 19, Local - gov, 27382, Some - college, 10, Never - married, Adm - clerical, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '255, 58, Private, 259014, Some - college, 10, Never - married, Transport - moving, Not -in -family, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '256, 42, Self - emp - not - inc, 303044, HS - grad, 9, Married - civ - spouse, Farming - fishing, Husband, Asian - Pac - Islander, Male, 0, 0, 40, Cambodia,> 50K'
  ],
  [
    '257, 20, Private, 117789, HS - grad, 9, Never - married, Other - service, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '258, 32, Private, 172579, HS - grad, 9, Separated, Other - service, Not -in -family, White, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '259, 45, Private, 187666, Assoc - voc, 11, Widowed, Exec - managerial, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '260, 50, Private, 204518, 7th - 8th, 4, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '261, 36, Private, 150042, Bachelors, 13, Divorced, Prof - specialty, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '262, 45, Private, 98092, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '263, 17, Private, 245918, 11th, 7, Never - married, Other - service, Own - child, White, Male, 0, 0, 12, United - States,<= 50K'
  ],
  [
    '264, 59, Private, 146013, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 4064, 0, 40, United - States,<= 50K'
  ],
  [
    '265, 26, Private, 378322, 11th, 7, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '266, 37, Self - emp - inc, 257295, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, Asian - Pac - Islander, Male, 0, 0, 75, Thailand,> 50K'
  ],
  [
    '267, 19, Private, 218956, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 24, Canada,<= 50K'
  ],
  [
    '268, 64, Private, 21174, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '269, 33, Private, 185480, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '270, 33, Private, 222205, HS - grad, 9, Married - civ - spouse, Craft - repair, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '271, 61, Private, 69867, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '272, 17, Private, 191260, 9th, 5, Never - married, Other - service, Own - child, White, Male, 1055, 0, 24, United - States,<= 50K'
  ],
  [
    '273, 50, Self - emp - not - inc, 30653, Masters, 14, Married - civ - spouse, Farming - fishing, Husband, White, Male, 2407, 0, 98, United - States,<= 50K'
  ],
  [
    '274, 27, Local - gov, 209109, Masters, 14, Never - married, Prof - specialty, Own - child, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '275, 30, Private, 70377, HS - grad, 9, Divorced, Prof - specialty, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '276, 43, Private, 477983, HS - grad, 9, Married - civ - spouse, Handlers - cleaners, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '277, 44, Private, 170924, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 7298, 0, 40, United - States,> 50K'
  ],
  [
    '278, 35, Private, 190174, Some - college, 10, Never - married, Exec - managerial, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '279, 25, Private, 193787, Some - college, 10, Never - married, Tech - support, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '280, 24, Private, 279472, Some - college, 10, Married - civ - spouse, Machine - op - inspct, Wife, White, Female, 7298, 0, 48, United - States,> 50K'
  ],
  [
    '281, 22, Private, 34918, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 15, Germany,<= 50K'
  ],
  [
    '282, 42, Local - gov, 97688, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 5178, 0, 40, United - States,> 50K'
  ],
  [
    '283, 34, Private, 175413, Assoc - acdm, 12, Divorced, Sales, Unmarried, Black, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '284, 60, Private, 173960, Bachelors, 13, Divorced, Prof - specialty, Not -in -family, White, Female, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '285, 21, Private, 205759, HS - grad, 9, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '286, 57, Federal - gov, 425161, Masters, 14, Married - civ - spouse, Sales, Husband, White, Male, 15024, 0, 40, United - States,> 50K'
  ],
  [
    '287, 41, Private, 220531, Prof - school, 15, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '288, 50, Private, 176609, Some - college, 10, Divorced, Other - service, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '289, 25, Private, 371987, Bachelors, 13, Never - married, Exec - managerial, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '290, 50, Private, 193884, 7th - 8th, 4, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, Ecuador,<= 50K'
  ],
  [
    '291, 36, Private, 200352, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '292, 31, Private, 127595, HS - grad, 9, Divorced, Prof - specialty, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '293, 29, Local - gov, 220419, Bachelors, 13, Never - married, Protective - serv, Not -in -family, White, Male, 0, 0, 56, United - States,<= 50K'
  ],
  [
    '294, 21, Private, 231931, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '295, 27, Private, 248402, Bachelors, 13, Never - married, Tech - support, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '296, 65, Private, 111095, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 16, United - States,<= 50K'
  ],
  [
    '297, 37, Self - emp - inc, 57424, Bachelors, 13, Divorced, Sales, Not -in -family, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '298, 39, Private, 157443, Masters, 14, Married - civ - spouse, Sales, Wife, Asian - Pac - Islander, Female, 3464, 0, 40, United - States,<= 50K'
  ],
  [
    '299, 24, Private, 278130, HS - grad, 9, Never - married, Craft - repair, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '300, 38, Private, 169469, HS - grad, 9, Divorced, Sales, Not -in -family, White, Male, 0, 0, 80, United - States,<= 50K'
  ],
  [
    '301, 48, Private, 146268, Bachelors, 13, Married - civ - spouse, Adm - clerical, Husband, White, Male, 7688, 0, 40, United - States,> 50K'
  ],
  [
    '302, 21, Private, 153718, Some - college, 10, Never - married, Other - service, Not -in -family, Asian - Pac - Islander, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '303, 31, Private, 217460, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '304, 55, Private, 238638, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 4386, 0, 40, United - States,> 50K'
  ],
  [
    '305, 24, Private, 303296, Some - college, 10, Married - civ - spouse, Adm - clerical, Wife, Asian - Pac - Islander, Female, 0, 0, 40, Laos,<= 50K'
  ],
  [
    '306, 43, Private, 173321, HS - grad, 9, Divorced, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '307, 26, Private, 193945, Assoc - acdm, 12, Never - married, Tech - support, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '308, 46, Private, 83082, Assoc - acdm, 12, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 33, United - States,<= 50K'
  ],
  [
    '309, 35, Private, 193815, Assoc - acdm, 12, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '310, 41, Self - emp - inc, 34987, Some - college, 10, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 54, United - States,> 50K'
  ],
  [
    '311, 26, Private, 59306, Bachelors, 13, Never - married, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '312, 34, Private, 142897, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, Asian - Pac - Islander, Male, 7298, 0, 35, Taiwan,> 50K'
  ],
  [
    '313, 19, Private, 860348, Some - college, 10, Never - married, Sales, Own - child, Black, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '314, 36, Self - emp - not - inc, 205607, Bachelors, 13, Divorced, Prof - specialty, Not -in -family, Black, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '315, 22, Private, 199698, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '316, 24, Private, 191954, Some - college, 10, Never - married, Machine - op - inspct, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '317, 77, Self - emp - not - inc, 138714, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '318, 22, Private, 399087, 5th - 6th, 3, Married - civ - spouse, Machine - op - inspct, Other - relative, White, Female, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '319, 29, Private, 423158, Some - college, 10, Never - married, Tech - support, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '320, 62, Private, 159841, HS - grad, 9, Widowed, Other - service, Not -in -family, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '321, 39, Self - emp - not - inc, 174308, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '322, 43, Private, 50356, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 1485, 50, United - States,<= 50K'
  ],
  [
    '323, 35, Private, 186110, HS - grad, 9, Divorced, Transport - moving, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '324, 29, Private, 200381, 11th, 7, Never - married, Exec - managerial, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '325, 76, Self - emp - not - inc, 174309, Masters, 14, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '326, 63, Self - emp - not - inc, 78383, HS - grad, 9, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '327, 23, Private, 211601, Assoc - voc, 11, Never - married, Sales, Own - child, Black, Female, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '328, 43, Private, 187728, Some - college, 10, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 1887, 50, United - States,> 50K'
  ],
  [
    '329, 58, Self - emp - not - inc, 321171, HS - grad, 9, Married - civ - spouse, Handlers - cleaners, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '330, 66, Private, 127921, HS - grad, 9, Never - married, Transport - moving, Not -in -family, White, Male, 2050, 0, 55, United - States,<= 50K'
  ],
  [
    '331, 41, Private, 206565, Some - college, 10, Never - married, Craft - repair, Not -in -family, Black, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '332, 26, Private, 224563, Bachelors, 13, Never - married, Adm - clerical, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '333, 47, Private, 178686, Assoc - voc, 11, Never - married, Other - service, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '334, 55, Local - gov, 98545, 10th, 6, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '335, 53, Private, 242606, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '336, 17, Private, 270942, 5th - 6th, 3, Never - married, Other - service, Other - relative, White, Male, 0, 0, 48, Mexico,<= 50K'
  ],
  [
    '337, 30, Private, 94235, HS - grad, 9, Never - married, Craft - repair, Other - relative, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '338, 49, Private, 71195, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '339, 19, Private, 104112, HS - grad, 9, Never - married, Sales, Unmarried, Black, Male, 0, 0, 30, Haiti,<= 50K'
  ],
  [
    '340, 45, Private, 261192, HS - grad, 9, Married - civ - spouse, Other - service, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '341, 26, Private, 94936, Assoc - acdm, 12, Never - married, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '342, 38, Private, 296478, Assoc - voc, 11, Married - civ - spouse, Craft - repair, Husband, White, Male, 7298, 0, 40, United - States,> 50K'
  ],
  [
    '343, 36, State - gov, 119272, HS - grad, 9, Married - civ - spouse, Protective - serv, Husband, White, Male, 7298, 0, 40, United - States,> 50K'
  ],
  [
    '344, 33, Private, 85043, HS - grad, 9, Never - married, Farming - fishing, Not -in -family, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '345, 22, State - gov, 293364, Some - college, 10, Never - married, Protective - serv, Own - child, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '346, 43, Self - emp - not - inc, 241895, Bachelors, 13, Never - married, Sales, Not -in -family, White, Male, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '347, 67, Private, 36135, 11th, 7, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 8, United - States,<= 50K'
  ],
  [
    '348, 30, Private, 151989, Assoc - voc, 11, Divorced, Sales, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '349, 56, Private, 101128, Assoc - acdm, 12, Married - spouse - absent, Other - service, Not -in -family, White, Male, 0, 0, 25, Iran,<= 50K'
  ],
  [
    '350, 31, Private, 156464, Bachelors, 13, Never - married, Prof - specialty, Own - child, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '351, 33, Private, 117963, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '352, 26, Private, 192262, HS - grad, 9, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '353, 33, Private, 111363, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '354, 46, Local - gov, 329752, 11th, 7, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '355, 59, Private, 372020, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '356, 38, Federal - gov, 95432, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '357, 65, Private, 161400, 11th, 7, Widowed, Other - service, Unmarried, Other, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '358, 40, Private, 96129, Assoc - voc, 11, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '359, 42, Private, 111949, HS - grad, 9, Married - civ - spouse, Adm - clerical, Wife, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '360, 26, Self - emp - not - inc, 117125, 9th, 5, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, Portugal,<= 50K'
  ],
  [
    '361, 36, Private, 348022, 10th, 6, Married - civ - spouse, Other - service, Wife, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '362, 62, Private, 270092, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '363, 43, Private, 180609, Bachelors, 13, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '364, 43, Private, 174575, Bachelors, 13, Divorced, Exec - managerial, Not -in -family, White, Male, 0, 1564, 45, United - States,> 50K'
  ],
  [
    '365, 22, Private, 410439, HS - grad, 9, Married - spouse - absent, Sales, Not -in -family, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '366, 28, Private, 92262, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '367, 56, Self - emp - not - inc, 183081, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '368, 22, Private, 362589, Assoc - acdm, 12, Never - married, Sales, Not -in -family, White, Female, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '369, 57, Private, 212448, Bachelors, 13, Divorced, Exec - managerial, Not -in -family, White, Female, 0, 0, 45, United - States,> 50K'
  ],
  [
    '370, 39, Private, 481060, HS - grad, 9, Divorced, Sales, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '371, 26, Federal - gov, 185885, Some - college, 10, Never - married, Adm - clerical, Unmarried, White, Female, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '372, 17, Private, 89821, 11th, 7, Never - married, Other - service, Own - child, White, Male, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '373, 40, State - gov, 184018, Assoc - voc, 11, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 38, United - States,> 50K'
  ],
  [
    '374, 45, Private, 256649, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '375, 44, Private, 160323, HS - grad, 9, Never - married, Craft - repair, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '376, 20, Local - gov, 350845, Some - college, 10, Never - married, Adm - clerical, Own - child, White, Female, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '377, 33, Private, 267404, HS - grad, 9, Married - civ - spouse, Craft - repair, Wife, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '378, 23, Private, 35633, Some - college, 10, Never - married, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '379, 46, Self - emp - not - inc, 80914, Masters, 14, Divorced, Exec - managerial, Not -in -family, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '380, 38, Private, 172927, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '381, 54, Private, 174319, HS - grad, 9, Divorced, Transport - moving, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '382, 46, Private, 214955, 5th - 6th, 3, Divorced, Craft - repair, Not -in -family, White, Female, 0, 2339, 45, United - States,<= 50K'
  ],
  [
    '383, 25, Private, 344991, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '384, 46, Private, 108699, Some - college, 10, Divorced, Sales, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '385, 36, Local - gov, 117312, Some - college, 10, Married - civ - spouse, Transport - moving, Wife, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '386, 23, Private, 396099, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '387, 29, Private, 134152, HS - grad, 9, Separated, Machine - op - inspct, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '388, 44, Private, 162028, Some - college, 10, Married - civ - spouse, Adm - clerical, Wife, White, Female, 0, 2415, 6, United - States,> 50K'
  ],
  [
    '389, 19, Private, 25429, Some - college, 10, Never - married, Adm - clerical, Own - child, White, Female, 0, 0, 16, United - States,<= 50K'
  ],
  [
    '390, 19, Private, 232392, HS - grad, 9, Never - married, Other - service, Other - relative, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '391, 35, Private, 220098, HS - grad, 9, Married - civ - spouse, Other - service, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '392, 27, Private, 301302, Bachelors, 13, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '393, 46, Self - emp - not - inc, 277946, Assoc - acdm, 12, Separated, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '394, 34, State - gov, 98101, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 7688, 0, 45, United - States,> 50K'
  ],
  [
    '395, 34, Private, 196164, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '396, 44, Private, 115562, Some - college, 10, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '397, 45, Private, 96975, Some - college, 10, Divorced, Handlers - cleaners, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '398, 20, Private, 137300, HS - grad, 9, Never - married, Sales, Other - relative, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '399, 25, Private, 86872, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 55, United - States,> 50K'
  ],
  [
    '400, 52, Self - emp - inc, 132178, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '401, 20, Private, 416103, Some - college, 10, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '402, 28, Private, 108574, Some - college, 10, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '403, 50, State - gov, 288353, Bachelors, 13, Married - civ - spouse, Protective - serv, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '404, 34, Private, 227689, Assoc - voc, 11, Divorced, Tech - support, Not -in -family, White, Female, 0, 0, 64, United - States,<= 50K'
  ],
  [
    '405, 28, Private, 166481, 7th - 8th, 4, Married - civ - spouse, Handlers - cleaners, Husband, Other, Male, 0, 2179, 40, Puerto - Rico,<= 50K'
  ],
  [
    '406, 41, Private, 445382, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 1977, 65, United - States,> 50K'
  ],
  [
    '407, 28, Private, 110145, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '408, 46, Self - emp - not - inc, 317253, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '409, 28, Private, 123147, Some - college, 10, Married - civ - spouse, Sales, Wife, White, Female, 0, 1887, 40, United - States,> 50K'
  ],
  [
    '410, 32, Private, 364657, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '411, 41, Local - gov, 42346, Some - college, 10, Divorced, Other - service, Not -in -family, Black, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '412, 24, Private, 241951, HS - grad, 9, Never - married, Handlers - cleaners, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '413, 33, Private, 118500, Some - college, 10, Divorced, Exec - managerial, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '414, 46, Private, 188386, Doctorate, 16, Married - civ - spouse, Exec - managerial, Husband, White, Male, 15024, 0, 60, United - States,> 50K'
  ],
  [
    '415, 31, State - gov, 1033222, Some - college, 10, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '416, 35, Private, 92440, 12th, 8, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '417, 52, Private, 190762, 1st - 4th, 2, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '418, 30, Private, 426017, 11th, 7, Never - married, Other - service, Own - child, White, Female, 0, 0, 19, United - States,<= 50K'
  ],
  [
    '419, 34, Local - gov, 243867, 11th, 7, Separated, Machine - op - inspct, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '420, 34, State - gov, 240283, HS - grad, 9, Divorced, Transport - moving, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '421, 20, Private, 61777, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '422, 17, Private, 175024, 11th, 7, Never - married, Handlers - cleaners, Own - child, White, Male, 2176, 0, 18, United - States,<= 50K'
  ],
  [
    '423, 32, State - gov, 92003, Bachelors, 13, Married - civ - spouse, Exec - managerial, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '424, 29, Private, 188401, HS - grad, 9, Divorced, Farming - fishing, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '425, 33, Private, 228528, 10th, 6, Never - married, Craft - repair, Unmarried, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '450, 17, Private, 258872, 11th, 7, Never - married, Sales, Own - child, White, Female, 0, 0, 5, United - States,<= 50K'
  ],
  [
    '451, 19, Private, 206399, HS - grad, 9, Never - married, Machine - op - inspct, Own - child, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '452, 45, Self - emp - inc, 197332, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 55, United - States,> 50K'
  ],
  [
    '453, 60, Private, 245062, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '454, 42, Private, 197583, Assoc - acdm, 12, Married - civ - spouse, Exec - managerial, Husband, Black, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '455, 44, Self - emp - not - inc, 234885, HS - grad, 9, Married - civ - spouse, Sales, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '456, 40, Private, 72887, Assoc - voc, 11, Married - civ - spouse, Machine - op - inspct, Husband, Asian - Pac - Islander, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '457, 30, Private, 180374, HS - grad, 9, Married - civ - spouse, Exec - managerial, Wife, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '458, 38, Private, 351299, Some - college, 10, Married - civ - spouse, Transport - moving, Husband, Black, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '459, 23, Private, 54012, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '460, 32, Private, 115745, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '461, 44, Private, 116632, Assoc - acdm, 12, Never - married, Farming - fishing, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '462, 54, Local - gov, 288825, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '463, 32, Private, 132601, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '464, 50, Private, 193374, 1st - 4th, 2, Married - spouse - absent, Craft - repair, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '465, 24, Private, 170070, Bachelors, 13, Never - married, Tech - support, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '466, 37, Private, 126708, HS - grad, 9, Married - civ - spouse, Adm - clerical, Wife, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '467, 52, Private, 35598, HS - grad, 9, Divorced, Transport - moving, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '468, 38, Private, 33983, Some - college, 10, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '469, 49, Private, 192776, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 1977, 45, United - States,> 50K'
  ],
  [
    '470, 30, Private, 118551, Bachelors, 13, Married - civ - spouse, Tech - support, Wife, White, Female, 0, 0, 16, United - States,> 50K'
  ],
  [
    '471, 60, Private, 201965, Some - college, 10, Never - married, Prof - specialty, Unmarried, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '472, 22, Private, 139883, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '473, 35, Private, 285020, HS - grad, 9, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '474, 30, Private, 303990, HS - grad, 9, Never - married, Transport - moving, Not -in -family, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '475, 67, Private, 49401, Assoc - voc, 11, Divorced, Other - service, Not -in -family, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '476, 46, Private, 279196, Bachelors, 13, Never - married, Craft - repair, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '477, 17, Private, 211870, 9th, 5, Never - married, Other - service, Not -in -family, White, Male, 0, 0, 6, United - States,<= 50K'
  ],
  [
    '478, 22, Private, 281432, Some - college, 10, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '479, 27, Private, 161155, 10th, 6, Never - married, Other - service, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '480, 23, Private, 197904, HS - grad, 9, Never - married, Other - service, Unmarried, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '481, 33, Private, 111746, Assoc - acdm, 12, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 45, Portugal,<= 50K'
  ],
  [
    '482, 43, Self - emp - not - inc, 170721, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '483, 28, State - gov, 70100, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '484, 41, Private, 193626, HS - grad, 9, Married - spouse - absent, Craft - repair, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '485, 52, Private, 271749, 12th, 8, Never - married, Sales, Other - relative, Black, Male, 594, 0, 40, United - States,<= 50K'
  ],
  [
    '486, 25, Private, 189775, Some - college, 10, Married - spouse - absent, Adm - clerical, Own - child, Black, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '487, 63, Private, 401531, 1st - 4th, 2, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '488, 59, Local - gov, 286967, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '489, 45, Local - gov, 164427, Bachelors, 13, Divorced, Prof - specialty, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '490, 38, Private, 91039, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 15024, 0, 60, United - States,> 50K'
  ],
  [
    '491, 40, Private, 347934, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '492, 46, Federal - gov, 371373, HS - grad, 9, Divorced, Adm - clerical, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '493, 35, Private, 32220, Assoc - acdm, 12, Never - married, Exec - managerial, Not -in -family, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '494, 34, Private, 187251, HS - grad, 9, Divorced, Prof - specialty, Unmarried, White, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '495, 33, Private, 178107, Bachelors, 13, Never - married, Craft - repair, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '496, 41, Private, 343121, HS - grad, 9, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 36, United - States,<= 50K'
  ],
  [
    '497, 20, Private, 262749, Some - college, 10, Never - married, Machine - op - inspct, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '498, 23, Private, 403107, 5th - 6th, 3, Never - married, Other - service, Own - child, White, Male, 0, 0, 40, El - Salvador,<= 50K'
  ],
  [
    '499, 26, Private, 64293, Some - college, 10, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '500, 72, Private, 303588, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '501, 23, Local - gov, 324960, HS - grad, 9, Never - married, Farming - fishing, Not -in -family, White, Male, 0, 0, 40, Poland,<= 50K'
  ],
  [
    '502, 62, Local - gov, 114060, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '503, 52, Private, 48925, Some - college, 10, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '504, 58, Private, 180980, Some - college, 10, Divorced, Other - service, Unmarried, White, Female, 0, 0, 42, France,<= 50K'
  ],
  [
    '505, 25, Private, 181054, Bachelors, 13, Never - married, Sales, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '506, 24, Private, 388093, Bachelors, 13, Never - married, Exec - managerial, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '507, 19, Private, 249609, Some - college, 10, Never - married, Protective - serv, Own - child, White, Male, 0, 0, 8, United - States,<= 50K'
  ],
  [
    '508, 43, Private, 112131, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '509, 47, Local - gov, 543162, HS - grad, 9, Separated, Adm - clerical, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '510, 39, Private, 91996, HS - grad, 9, Divorced, Other - service, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '511, 49, Private, 141944, Assoc - voc, 11, Married - spouse - absent, Handlers - cleaners, Unmarried, White, Male, 0, 1380, 42, United - States,<= 50K'
  ],
  [
    '512, 53, Private, 251804, 5th - 6th, 3, Widowed, Sales, Unmarried, Black, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '513, 32, Private, 37070, Assoc - voc, 11, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '514, 34, Private, 337587, Some - college, 10, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '515, 28, Private, 189346, HS - grad, 9, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '516, 57, Private, 222216, Assoc - voc, 11, Widowed, Sales, Unmarried, White, Female, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '517, 25, Private, 267044, Some - college, 10, Never - married, Adm - clerical, Not -in -family, Amer - Indian - Eskimo, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '518, 20, Private, 214635, Some - college, 10, Never - married, Sales, Own - child, White, Male, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '519, 21, Private, 204226, Some - college, 10, Never - married, Sales, Unmarried, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '520, 34, Private, 108116, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '521, 38, Self - emp - inc, 99146, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 15024, 0, 80, United - States,> 50K'
  ],
  [
    '522, 50, Private, 196232, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 7688, 0, 50, United - States,> 50K'
  ],
  [
    '523, 24, Local - gov, 248344, Some - college, 10, Divorced, Handlers - cleaners, Not -in -family, Black, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '524, 37, Local - gov, 186035, Some - college, 10, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '525, 44, Private, 177905, Some - college, 10, Divorced, Machine - op - inspct, Unmarried, White, Male, 0, 0, 58, United - States,> 50K'
  ],
  [
    '526, 28, Private, 85812, Some - college, 10, Married - civ - spouse, Sales, Wife, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '527, 42, Private, 221172, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '528, 74, Private, 99183, Some - college, 10, Divorced, Adm - clerical, Not -in -family, White, Female, 0, 0, 9, United - States,<= 50K'
  ],
  [
    '529, 38, Self - emp - not - inc, 190387, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '530, 44, Self - emp - not - inc, 202692, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '531, 44, Private, 109339, 11th, 7, Divorced, Machine - op - inspct, Unmarried, Other, Female, 0, 0, 46, Puerto - Rico,<= 50K'
  ],
  [
    '532, 26, Private, 108658, HS - grad, 9, Never - married, Machine - op - inspct, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '533, 36, Private, 197202, HS - grad, 9, Married - civ - spouse, Other - service, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '534, 41, Private, 101739, Assoc - acdm, 12, Married - civ - spouse, Exec - managerial, Wife, White, Female, 0, 0, 50, United - States,> 50K'
  ],
  [
    '535, 67, Private, 231559, Prof - school, 15, Married - civ - spouse, Prof - specialty, Husband, White, Male, 20051, 0, 48, United - States,> 50K'
  ],
  [
    '536, 39, Local - gov, 207853, 12th, 8, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '537, 57, Private, 190942, 1st - 4th, 2, Widowed, Priv - house - serv, Not -in -family, Black, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '538, 29, Private, 102345, Assoc - voc, 11, Separated, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '539, 31, Self - emp - inc, 41493, Bachelors, 13, Never - married, Farming - fishing, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '540, 34, Private, 190027, HS - grad, 9, Never - married, Sales, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '541, 44, Private, 210525, Some - college, 10, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '542, 29, Private, 133937, Doctorate, 16, Never - married, Prof - specialty, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '543, 30, Private, 237903, Some - college, 10, Never - married, Handlers - cleaners, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '544, 27, Private, 163862, HS - grad, 9, Never - married, Transport - moving, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '545, 27, Private, 201872, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '546, 32, Private, 84179, HS - grad, 9, Never - married, Handlers - cleaners, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '547, 58, Private, 51662, 10th, 6, Married - civ - spouse, Other - service, Wife, White, Female, 0, 0, 8, United - States,<= 50K'
  ],
  [
    '548, 35, Local - gov, 233327, Some - college, 10, Married - civ - spouse, Protective - serv, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '549, 21, Private, 259510, HS - grad, 9, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 36, United - States,<= 50K'
  ],
  [
    '550, 28, Private, 184831, Some - college, 10, Never - married, Craft - repair, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '551, 46, Self - emp - not - inc, 245724, Some - college, 10, Divorced, Exec - managerial, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '552, 36, Self - emp - not - inc, 27053, HS - grad, 9, Separated, Other - service, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '553, 72, Private, 205343, 11th, 7, Widowed, Adm - clerical, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '554, 35, Private, 229328, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Wife, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '555, 33, Federal - gov, 319560, Assoc - voc, 11, Divorced, Craft - repair, Unmarried, Black, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '556, 69, Private, 136218, 11th, 7, Never - married, Machine - op - inspct, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '557, 35, Private, 54576, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '558, 31, Private, 323069, HS - grad, 9, Separated, Adm - clerical, Unmarried, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '559, 34, Private, 148291, HS - grad, 9, Married - civ - spouse, Tech - support, Wife, White, Female, 0, 0, 32, United - States,<= 50K'
  ],
  [
    '560, 30, Private, 152453, 11th, 7, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '561, 28, Private, 114053, Bachelors, 13, Never - married, Transport - moving, Not -in -family, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '562, 54, Private, 212960, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 35, United - States,> 50K'
  ],
  [
    '563, 47, Private, 264052, Some - college, 10, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '564, 24, Private, 82804, HS - grad, 9, Never - married, Handlers - cleaners, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '565, 52, Self - emp - not - inc, 334273, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '566, 20, Private, 27337, HS - grad, 9, Never - married, Handlers - cleaners, Own - child, Amer - Indian - Eskimo, Male, 0, 0, 48, United - States,<= 50K'
  ],
  [
    '567, 43, Self - emp - inc, 188436, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 5013, 0, 45, United - States,<= 50K'
  ],
  [
    '568, 45, Private, 433665, 7th - 8th, 4, Separated, Other - service, Unmarried, White, Female, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '569, 29, Self - emp - not - inc, 110663, HS - grad, 9, Separated, Craft - repair, Not -in -family, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '570, 47, Private, 87490, Masters, 14, Divorced, Exec - managerial, Unmarried, White, Male, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '571, 24, Private, 354351, HS - grad, 9, Never - married, Craft - repair, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '572, 51, Private, 95469, HS - grad, 9, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '573, 17, Private, 242718, 11th, 7, Never - married, Sales, Own - child, White, Male, 0, 0, 12, United - States,<= 50K'
  ],
  [
    '574, 37, Private, 22463, Assoc - voc, 11, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 1977, 40, United - States,> 50K'
  ],
  [
    '575, 27, Private, 158156, Doctorate, 16, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 70, United - States,<= 50K'
  ],
  [
    '576, 29, Private, 350162, Bachelors, 13, Married - civ - spouse, Exec - managerial, Wife, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '577, 18, Private, 165532, 12th, 8, Never - married, Sales, Own - child, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '578, 36, Self - emp - not - inc, 28738, Assoc - acdm, 12, Divorced, Sales, Unmarried, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '579, 58, Local - gov, 283635, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '580, 26, Self - emp - not - inc, 86646, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '581, 65, Private, 195733, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 30, United - States,> 50K'
  ],
  [
    '582, 57, Private, 69884, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '583, 59, Private, 199713, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '584, 27, Private, 181659, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '585, 31, Self - emp - not - inc, 340939, Bachelors, 13, Never - married, Tech - support, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '586, 21, Private, 197747, Some - college, 10, Never - married, Sales, Own - child, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '587, 29, Private, 34292, Some - college, 10, Never - married, Adm - clerical, Not -in -family, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '588, 18, Private, 156764, 11th, 7, Never - married, Other - service, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '589, 52, Private, 25826, 10th, 6, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 1887, 47, United - States,> 50K'
  ],
  [
    '590, 57, Self - emp - inc, 103948, Bachelors, 13, Divorced, Prof - specialty, Not -in -family, White, Male, 0, 0, 80, United - States,<= 50K'
  ],
  [
    '591, 42, Private, 137390, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '592, 55, Private, 105138, HS - grad, 9, Married - civ - spouse, Sales, Wife, Asian - Pac - Islander, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '593, 60, Private, 39352, 7th - 8th, 4, Never - married, Transport - moving, Not -in -family, White, Male, 0, 0, 48, United - States,> 50K'
  ],
  [
    '594, 31, Private, 168387, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 7688, 0, 40, Canada,> 50K'
  ],
  [
    '595, 23, Private, 117789, Bachelors, 13, Never - married, Adm - clerical, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '596, 27, Private, 267147, HS - grad, 9, Never - married, Sales, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '597, 23, Private, 99399, Some - college, 10, Never - married, Sales, Unmarried, Amer - Indian - Eskimo, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '598, 42, Self - emp - not - inc, 214242, Prof - school, 15, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 1902, 50, United - States,> 50K'
  ],
  [
    '599, 25, Private, 200408, Some - college, 10, Never - married, Tech - support, Not -in -family, White, Male, 2174, 0, 40, United - States,<= 50K'
  ],
  [
    '600, 49, Private, 136455, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '601, 32, Private, 239824, Bachelors, 13, Never - married, Tech - support, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '602, 19, Private, 217039, Some - college, 10, Never - married, Adm - clerical, Own - child, White, Male, 0, 0, 28, United - States,<= 50K'
  ],
  [
    '603, 60, Private, 51290, 7th - 8th, 4, Divorced, Other - service, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '604, 42, Local - gov, 175674, 9th, 5, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '605, 35, Self - emp - not - inc, 194404, Assoc - acdm, 12, Never - married, Farming - fishing, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '606, 48, Private, 45612, HS - grad, 9, Never - married, Adm - clerical, Unmarried, Black, Female, 0, 0, 37, United - States,<= 50K'
  ],
  [
    '607, 51, Private, 410114, Masters, 14, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '608, 29, Private, 182521, HS - grad, 9, Never - married, Craft - repair, Not -in -family, Amer - Indian - Eskimo, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '609, 36, Local - gov, 339772, HS - grad, 9, Separated, Exec - managerial, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '610, 17, Private, 169658, 10th, 6, Never - married, Other - service, Own - child, White, Female, 0, 0, 21, United - States,<= 50K'
  ],
  [
    '611, 52, Private, 200853, Masters, 14, Divorced, Prof - specialty, Not -in -family, White, Female, 6849, 0, 60, United - States,<= 50K'
  ],
  [
    '612, 24, Private, 247564, HS - grad, 9, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '613, 24, Private, 249909, HS - grad, 9, Married - civ - spouse, Handlers - cleaners, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '614, 26, Local - gov, 208122, Bachelors, 13, Never - married, Prof - specialty, Own - child, White, Male, 1055, 0, 40, United - States,<= 50K'
  ],
  [
    '615, 27, Private, 109881, Bachelors, 13, Never - married, Other - service, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '616, 39, Private, 207824, HS - grad, 9, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '617, 30, Private, 369027, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, Black, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '618, 50, Self - emp - not - inc, 114117, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 32, United - States,<= 50K'
  ],
  [
    '619, 52, Self - emp - inc, 51048, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '620, 46, Private, 102388, Prof - school, 15, Married - civ - spouse, Prof - specialty, Husband, White, Male, 15024, 0, 45, United - States,> 50K'
  ],
  [
    '621, 23, Private, 190483, Bachelors, 13, Never - married, Sales, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '622, 45, Private, 462440, 11th, 7, Widowed, Other - service, Not -in -family, Black, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '623, 65, Private, 109351, 9th, 5, Widowed, Priv - house - serv, Unmarried, Black, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '624, 29, Private, 34383, Assoc - voc, 11, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '625, 47, Private, 241832, 9th, 5, Married - spouse - absent, Handlers - cleaners, Unmarried, White, Male, 0, 0, 40, El - Salvador,<= 50K'
  ],
  [
    '626, 30, Private, 124187, HS - grad, 9, Never - married, Farming - fishing, Own - child, Black, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '627, 34, Private, 153614, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '628, 38, Self - emp - not - inc, 267556, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 64, United - States,<= 50K'
  ],
  [
    '629, 33, Private, 205469, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '630, 49, Private, 268090, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 26, United - States,> 50K'
  ],
  [
    '631, 47, Self - emp - not - inc, 165039, Some - college, 10, Never - married, Other - service, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '632, 49, Local - gov, 120451, 10th, 6, Separated, Other - service, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '633, 43, Private, 154374, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 15024, 0, 60, United - States,> 50K'
  ],
  [
    '634, 30, Private, 103649, Bachelors, 13, Married - civ - spouse, Adm - clerical, Wife, Black, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '635, 58, Self - emp - not - inc, 35723, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '636, 19, Private, 262601, HS - grad, 9, Never - married, Other - service, Own - child, White, Female, 0, 0, 14, United - States,<= 50K'
  ],
  [
    '637, 21, Private, 226181, Bachelors, 13, Never - married, Handlers - cleaners, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '638, 33, Private, 175697, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 15024, 0, 60, United - States,> 50K'
  ],
  [
    '639, 47, Self - emp - inc, 248145, 5th - 6th, 3, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 50, Cuba,<= 50K'
  ],
  [
    '640, 52, Self - emp - not - inc, 289436, Doctorate, 16, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '641, 26, Private, 75654, HS - grad, 9, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '642, 60, Private, 199378, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '643, 21, Private, 160968, Some - college, 10, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '644, 36, Private, 188563, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 5178, 0, 50, United - States,> 50K'
  ],
  [
    '645, 31, Private, 55849, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '646, 50, Self - emp - inc, 195322, Doctorate, 16, Separated, Prof - specialty, Not -in -family, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '647, 31, Local - gov, 402089, HS - grad, 9, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '648, 71, Private, 78277, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '649, 58, Private, 158611, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '650, 30, State - gov, 169496, Bachelors, 13, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '651, 20, Private, 130959, Some - college, 10, Never - married, Other - service, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '652, 24, Private, 556660, HS - grad, 9, Never - married, Exec - managerial, Other - relative, White, Male, 4101, 0, 50, United - States,<= 50K'
  ],
  [
    '653, 35, Private, 292472, Doctorate, 16, Married - civ - spouse, Prof - specialty, Husband, Asian - Pac - Islander, Male, 0, 0, 40, Taiwan,> 50K'
  ],
  [
    '654, 38, State - gov, 143774, Some - college, 10, Separated, Exec - managerial, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '655, 27, Private, 288341, HS - grad, 9, Never - married, Machine - op - inspct, Own - child, White, Female, 0, 0, 32, United - States,<= 50K'
  ],
  [
    '656, 29, State - gov, 71592, Some - college, 10, Never - married, Adm - clerical, Unmarried, Asian - Pac - Islander, Female, 0, 0, 40, Philippines,<= 50K'
  ],
  [
    '657, 70, Private, 167358, 9th, 5, Widowed, Sales, Unmarried, White, Female, 1111, 0, 15, United - States,<= 50K'
  ],
  [
    '658, 34, Private, 106742, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '659, 44, Private, 219288, 7th - 8th, 4, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '660, 43, Private, 174524, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '661, 44, Self - emp - not - inc, 335183, 12th, 8, Married - civ - spouse, Handlers - cleaners, Husband, Black, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '662, 35, Private, 261293, Masters, 14, Never - married, Sales, Not -in -family, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '663, 27, Private, 111900, Some - college, 10, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '664, 43, Local - gov, 194360, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '665, 20, Private, 81145, Some - college, 10, Never - married, Sales, Not -in -family, White, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '666, 42, Private, 341204, Assoc - acdm, 12, Divorced, Prof - specialty, Unmarried, White, Female, 8614, 0, 40, United - States,> 50K'
  ],
  [
    '667, 27, State - gov, 249362, Some - college, 10, Married - civ - spouse, Transport - moving, Husband, White, Male, 3411, 0, 40, United - States,<= 50K'
  ],
  [
    '668, 42, Private, 247019, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, Black, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '669, 20, Private, 114746, 11th, 7, Married - spouse - absent, Sales, Own - child, Asian - Pac - Islander, Female, 0, 1762, 40, South,<= 50K'
  ],
  [
    '670, 24, Private, 172146, 9th, 5, Never - married, Machine - op - inspct, Not -in -family, White, Male, 0, 1721, 40, United - States,<= 50K'
  ],
  [
    '671, 48, Federal - gov, 110457, Some - college, 10, Divorced, Exec - managerial, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '672, 17, Private, 80077, 11th, 7, Never - married, Sales, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '673, 17, Self - emp - not - inc, 368700, 11th, 7, Never - married, Farming - fishing, Own - child, White, Male, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '674, 33, Private, 182556, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '675, 50, Self - emp - inc, 219420, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '676, 22, Private, 240817, HS - grad, 9, Never - married, Sales, Own - child, White, Female, 2597, 0, 40, United - States,<= 50K'
  ],
  [
    '677, 17, Private, 102726, 12th, 8, Never - married, Other - service, Own - child, White, Male, 0, 0, 16, United - States,<= 50K'
  ],
  [
    '678, 32, Private, 226267, Some - college, 10, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '679, 31, Private, 125457, HS - grad, 9, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '680, 58, Self - emp - not - inc, 204021, HS - grad, 9, Widowed, Exec - managerial, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '681, 29, Local - gov, 92262, HS - grad, 9, Never - married, Protective - serv, Own - child, White, Male, 0, 0, 48, United - States,<= 50K'
  ],
  [
    '682, 37, Private, 161141, Assoc - voc, 11, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, Portugal,> 50K'
  ],
  [
    '683, 34, Self - emp - not - inc, 190290, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '684, 23, Local - gov, 430828, Some - college, 10, Separated, Exec - managerial, Unmarried, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '685, 18, State - gov, 59342, 11th, 7, Never - married, Adm - clerical, Own - child, White, Female, 0, 0, 5, United - States,<= 50K'
  ],
  [
    '686, 34, Private, 136721, HS - grad, 9, Divorced, Exec - managerial, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '687, 66, Private, 149422, 7th - 8th, 4, Never - married, Sales, Not -in -family, White, Male, 0, 0, 4, United - States,<= 50K'
  ],
  [
    '688, 45, Local - gov, 86644, Bachelors, 13, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '689, 41, Private, 195124, Masters, 14, Never - married, Exec - managerial, Not -in -family, White, Male, 0, 0, 35, Dominican - Republic,<= 50K'
  ],
  [
    '690, 26, Private, 167350, HS - grad, 9, Never - married, Other - service, Other - relative, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '691, 54, Local - gov, 113000, Some - college, 10, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '692, 24, Private, 140027, Some - college, 10, Never - married, Machine - op - inspct, Own - child, Black, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '693, 42, Private, 262425, Some - college, 10, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '694, 20, Private, 316702, Some - college, 10, Never - married, Prof - specialty, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '695, 23, State - gov, 335453, Bachelors, 13, Never - married, Tech - support, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '696, 25, Private, 202480, Assoc - acdm, 12, Never - married, Sales, Other - relative, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '697, 35, Private, 203628, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '698, 31, Private, 118710, Masters, 14, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 1902, 40, United - States,> 50K'
  ],
  [
    '699, 30, Private, 189620, Bachelors, 13, Never - married, Prof - specialty, Own - child, White, Female, 0, 0, 40, Poland,<= 50K'
  ],
  [
    '700, 19, Private, 475028, HS - grad, 9, Never - married, Sales, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '701, 36, Local - gov, 110866, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '702, 31, Private, 243605, Bachelors, 13, Widowed, Sales, Unmarried, White, Female, 0, 1380, 40, Cuba,<= 50K'
  ],
  [
    '703, 21, Private, 163870, Some - college, 10, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '704, 31, Self - emp - not - inc, 80145, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '705, 46, Private, 295566, Doctorate, 16, Divorced, Prof - specialty, Unmarried, White, Female, 25236, 0, 65, United - States,> 50K'
  ],
  [
    '706, 44, Private, 63042, Bachelors, 13, Divorced, Exec - managerial, Own - child, White, Female, 0, 0, 50, United - States,> 50K'
  ],
  [
    '707, 40, Private, 229148, 12th, 8, Married - civ - spouse, Other - service, Husband, Black, Male, 0, 0, 40, Jamaica,<= 50K'
  ],
  [
    '708, 45, Private, 242552, Some - college, 10, Never - married, Sales, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '709, 60, Private, 177665, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '710, 18, Private, 208103, 11th, 7, Never - married, Other - service, Other - relative, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '711, 28, Private, 296450, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '712, 36, Private, 70282, Some - college, 10, Divorced, Adm - clerical, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '713, 36, Private, 271767, Bachelors, 13, Separated, Prof - specialty, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '714, 40, Private, 144995, Assoc - voc, 11, Married - civ - spouse, Tech - support, Husband, White, Male, 4386, 0, 40, United - States,<= 50K'
  ],
  [
    '715, 36, Local - gov, 382635, Bachelors, 13, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 35, Honduras,<= 50K'
  ],
  [
    '716, 31, Private, 295697, HS - grad, 9, Separated, Other - service, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '717, 33, Private, 194141, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '718, 19, State - gov, 378418, HS - grad, 9, Never - married, Tech - support, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '719, 22, Private, 214399, Some - college, 10, Never - married, Sales, Own - child, White, Female, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '720, 34, Private, 217460, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '721, 33, Private, 182556, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '722, 41, Private, 125831, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 2051, 60, United - States,<= 50K'
  ],
  [
    '723, 29, Private, 271328, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Male, 4650, 0, 40, United - States,<= 50K'
  ],
  [
    '724, 50, Local - gov, 50459, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 42, United - States,> 50K'
  ],
  [
    '725, 42, Private, 162140, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 7298, 0, 45, United - States,> 50K'
  ],
  [
    '726, 43, Private, 177937, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '727, 44, Private, 111502, HS - grad, 9, Married - civ - spouse, Sales, Wife, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '728, 20, Private, 299047, Some - college, 10, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '729, 31, Private, 223212, HS - grad, 9, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '730, 65, Self - emp - not - inc, 118474, 11th, 7, Married - civ - spouse, Exec - managerial, Husband, White, Male, 9386, 0, 59, United - States,> 50K'
  ],
  [
    '731, 23, Private, 352139, Some - college, 10, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '732, 55, Private, 173093, Some - college, 10, Divorced, Adm - clerical, Not -in -family, Asian - Pac - Islander, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '733, 26, Private, 181655, Assoc - voc, 11, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 2377, 45, United - States,<= 50K'
  ],
  [
    '734, 25, Private, 332702, Assoc - voc, 11, Never - married, Other - service, Own - child, White, Female, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '735, 45, Private, 51164, Some - college, 10, Married - civ - spouse, Sales, Wife, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '736, 35, Private, 234901, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 2407, 0, 40, United - States,<= 50K'
  ],
  [
    '737, 36, Private, 131414, Some - college, 10, Never - married, Sales, Not -in -family, Black, Female, 0, 0, 36, United - States,<= 50K'
  ],
  [
    '738, 43, State - gov, 260960, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '739, 56, Private, 156052, HS - grad, 9, Widowed, Other - service, Unmarried, Black, Female, 594, 0, 20, United - States,<= 50K'
  ],
  [
    '740, 42, Private, 279914, Bachelors, 13, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '741, 19, Private, 192453, Some - college, 10, Never - married, Other - service, Other - relative, White, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '742, 55, Self - emp - not - inc, 200939, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 72, United - States,<= 50K'
  ],
  [
    '743, 42, Private, 151408, Masters, 14, Never - married, Exec - managerial, Not -in -family, White, Female, 14084, 0, 50, United - States,> 50K'
  ],
  [
    '744, 26, Private, 112847, Assoc - voc, 11, Never - married, Tech - support, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '745, 17, Private, 316929, 12th, 8, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '746, 42, Local - gov, 126319, Bachelors, 13, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '747, 55, Private, 197422, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 7688, 0, 40, United - States,> 50K'
  ],
  [
    '748, 32, Private, 267736, Some - college, 10, Never - married, Adm - clerical, Own - child, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '749, 29, Private, 267034, 11th, 7, Never - married, Craft - repair, Own - child, Black, Male, 0, 0, 40, Haiti,<= 50K'
  ],
  [
    '750, 46, State - gov, 193047, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 37, United - States,<= 50K'
  ],
  [
    '751, 29, State - gov, 356089, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 7688, 0, 40, United - States,> 50K'
  ],
  [
    '752, 22, Private, 223515, Bachelors, 13, Never - married, Prof - specialty, Unmarried, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '753, 58, Self - emp - not - inc, 87510, 10th, 6, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '754, 23, Private, 145111, HS - grad, 9, Never - married, Transport - moving, Unmarried, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '755, 39, Private, 48093, HS - grad, 9, Never - married, Handlers - cleaners, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '756, 27, Private, 31757, Assoc - voc, 11, Never - married, Craft - repair, Own - child, White, Male, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '757, 54, Private, 285854, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '817, 41, Private, 254440, Assoc - voc, 11, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '818, 56, Private, 186556, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '819, 64, Private, 169871, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '820, 47, Private, 191277, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '821, 48, Private, 167159, Assoc - voc, 11, Never - married, Adm - clerical, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '822, 31, Private, 171871, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 46, United - States,<= 50K'
  ],
  [
    '823, 29, Private, 154411, Assoc - voc, 11, Never - married, Tech - support, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '824, 30, Private, 129227, HS - grad, 9, Widowed, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '825, 32, Private, 110331, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 1672, 60, United - States,<= 50K'
  ],
  [
    '826, 57, Private, 34269, HS - grad, 9, Widowed, Transport - moving, Unmarried, White, Male, 0, 653, 42, United - States,> 50K'
  ],
  [
    '827, 62, Private, 174355, HS - grad, 9, Widowed, Other - service, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '828, 39, Private, 680390, HS - grad, 9, Separated, Machine - op - inspct, Unmarried, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '829, 43, Private, 233130, Some - college, 10, Never - married, Adm - clerical, Not -in -family, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '830, 24, Self - emp - inc, 165474, Bachelors, 13, Never - married, Sales, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '831, 42, Private, 257780, 11th, 7, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '832, 53, Private, 194259, Some - college, 10, Married - civ - spouse, Adm - clerical, Wife, White, Female, 4386, 0, 40, United - States,> 50K'
  ],
  [
    '833, 26, Private, 280093, Some - college, 10, Never - married, Handlers - cleaners, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '834, 73, Self - emp - not - inc, 177387, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '835, 72, Private, 28929, 11th, 7, Widowed, Sales, Not -in -family, White, Female, 0, 0, 24, United - States,<= 50K'
  ],
  [
    '836, 55, Private, 105304, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '837, 25, Private, 499233, HS - grad, 9, Divorced, Adm - clerical, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '838, 41, Private, 180572, Bachelors, 13, Divorced, Prof - specialty, Not -in -family, White, Female, 0, 0, 50, United - States,> 50K'
  ],
  [
    '839, 24, Private, 321435, Bachelors, 13, Never - married, Exec - managerial, Not -in -family, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '840, 63, Private, 86108, HS - grad, 9, Widowed, Farming - fishing, Not -in -family, White, Male, 0, 0, 6, United - States,<= 50K'
  ],
  [
    '841, 17, Private, 198124, 11th, 7, Never - married, Sales, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '842, 35, Private, 135162, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '843, 51, Private, 146813, Some - college, 10, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '844, 62, Local - gov, 291175, Bachelors, 13, Widowed, Prof - specialty, Not -in -family, White, Female, 0, 0, 48, United - States,<= 50K'
  ],
  [
    '845, 55, Private, 387569, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 4386, 0, 40, United - States,> 50K'
  ],
  [
    '846, 43, Private, 102895, Some - college, 10, Divorced, Prof - specialty, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '847, 40, Local - gov, 33274, HS - grad, 9, Divorced, Other - service, Not -in -family, White, Female, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '848, 37, Private, 86551, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '849, 39, Private, 138192, Bachelors, 13, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '850, 31, Private, 118966, HS - grad, 9, Never - married, Craft - repair, Own - child, White, Male, 0, 0, 18, United - States,<= 50K'
  ],
  [
    '851, 61, Private, 99784, Masters, 14, Widowed, Prof - specialty, Not -in -family, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '852, 26, Private, 90980, Assoc - voc, 11, Divorced, Adm - clerical, Not -in -family, White, Female, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '853, 46, Self - emp - not - inc, 177407, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '854, 26, Private, 96467, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '855, 48, State - gov, 327886, Doctorate, 16, Divorced, Prof - specialty, Own - child, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '856, 34, Private, 111567, HS - grad, 9, Never - married, Transport - moving, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '857, 34, Local - gov, 166545, HS - grad, 9, Never - married, Adm - clerical, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '858, 59, Private, 142182, HS - grad, 9, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '859, 34, Private, 188798, Bachelors, 13, Never - married, Prof - specialty, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '860, 49, Private, 38563, Bachelors, 13, Never - married, Exec - managerial, Not -in -family, White, Female, 0, 0, 56, United - States,> 50K'
  ],
  [
    '861, 18, Private, 216284, 11th, 7, Never - married, Adm - clerical, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '862, 43, Private, 191547, HS - grad, 9, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '863, 48, Private, 285335, 11th, 7, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '864, 28, Self - emp - inc, 142712, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 70, United - States,<= 50K'
  ],
  [
    '865, 33, Private, 80945, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '866, 24, Private, 309055, Some - college, 10, Never - married, Sales, Not -in -family, White, Female, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '867, 21, Private, 62339, 10th, 6, Never - married, Handlers - cleaners, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '868, 17, Private, 368700, 11th, 7, Never - married, Sales, Own - child, White, Male, 0, 0, 28, United - States,<= 50K'
  ],
  [
    '869, 39, Private, 176186, Some - college, 10, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '870, 29, Self - emp - not - inc, 266855, Bachelors, 13, Separated, Prof - specialty, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '871, 44, Private, 48087, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '872, 24, Private, 121313, Some - college, 10, Never - married, Transport - moving, Own - child, White, Male, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '873, 71, Self - emp - not - inc, 143437, Masters, 14, Married - civ - spouse, Sales, Husband, White, Male, 10605, 0, 40, United - States,> 50K'
  ],
  [
    '874, 51, Self - emp - not - inc, 160724, Bachelors, 13, Married - civ - spouse, Sales, Husband, Asian - Pac - Islander, Male, 0, 2415, 40, China,> 50K'
  ],
  [
    '875, 55, Private, 282753, 5th - 6th, 3, Divorced, Other - service, Unmarried, Black, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '876, 41, Private, 194636, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '877, 23, Private, 153044, HS - grad, 9, Never - married, Handlers - cleaners, Unmarried, Black, Female, 0, 0, 7, United - States,<= 50K'
  ],
  [
    '878, 38, Private, 411797, Assoc - voc, 11, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '879, 39, Private, 117683, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '880, 19, Private, 376540, HS - grad, 9, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '881, 49, Private, 72393, 9th, 5, Divorced, Machine - op - inspct, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '882, 32, Private, 270335, Bachelors, 13, Married - civ - spouse, Adm - clerical, Other - relative, White, Male, 0, 0, 40, Philippines,> 50K'
  ],
  [
    '883, 27, Private, 96226, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 70, United - States,<= 50K'
  ],
  [
    '884, 38, Private, 95336, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '885, 33, Private, 258498, Some - college, 10, Married - civ - spouse, Craft - repair, Wife, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '886, 63, Private, 149698, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '887, 23, Private, 205865, Bachelors, 13, Never - married, Exec - managerial, Own - child, White, Male, 0, 0, 28, United - States,<= 50K'
  ],
  [
    '888, 33, Self - emp - inc, 155781, Some - college, 10, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '889, 54, Self - emp - not - inc, 406468, HS - grad, 9, Married - civ - spouse, Sales, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '890, 29, Private, 177119, Assoc - voc, 11, Divorced, Tech - support, Not -in -family, White, Female, 2174, 0, 45, United - States,<= 50K'
  ],
  [
    '891, 48, Private, 144397, Some - college, 10, Divorced, Sales, Unmarried, Black, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '892, 35, Self - emp - not - inc, 372525, Bachelors, 13, Never - married, Exec - managerial, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '893, 28, Private, 164170, Assoc - voc, 11, Married - civ - spouse, Adm - clerical, Wife, Asian - Pac - Islander, Female, 0, 0, 40, India,<= 50K'
  ],
  [
    '894, 37, Private, 183800, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 7688, 0, 50, United - States,> 50K'
  ],
  [
    '895, 42, Self - emp - not - inc, 177307, Prof - school, 15, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 65, United - States,> 50K'
  ],
  [
    '896, 40, Private, 170108, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '897, 47, Private, 341995, Some - college, 10, Divorced, Sales, Own - child, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '898, 22, Private, 226508, Bachelors, 13, Never - married, Exec - managerial, Own - child, White, Female, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '899, 30, Private, 87418, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 45, United - States,> 50K'
  ],
  [
    '900, 28, Private, 109165, HS - grad, 9, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '901, 63, Local - gov, 28856, 7th - 8th, 4, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '902, 51, Self - emp - not - inc, 175897, 9th, 5, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '903, 22, Private, 99697, HS - grad, 9, Never - married, Handlers - cleaners, Own - child, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '904, 27, Private, 90270, Assoc - acdm, 12, Married - civ - spouse, Sales, Own - child, Amer - Indian - Eskimo, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '905, 35, Private, 152375, HS - grad, 9, Never - married, Sales, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '906, 46, Private, 171550, HS - grad, 9, Divorced, Machine - op - inspct, Not -in -family, White, Female, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '907, 37, Private, 211154, Some - college, 10, Divorced, Machine - op - inspct, Not -in -family, White, Male, 0, 0, 52, United - States,<= 50K'
  ],
  [
    '908, 24, Private, 202570, Bachelors, 13, Never - married, Prof - specialty, Own - child, Black, Male, 0, 0, 15, United - States,<= 50K'
  ],
  [
    '909, 37, Self - emp - not - inc, 168496, HS - grad, 9, Divorced, Handlers - cleaners, Own - child, White, Male, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '910, 53, Private, 68898, Some - college, 10, Married - civ - spouse, Tech - support, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '911, 27, Private, 93235, HS - grad, 9, Never - married, Sales, Not -in -family, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '912, 38, Private, 278924, Some - college, 10, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 44, United - States,<= 50K'
  ],
  [
    '913, 53, Self - emp - not - inc, 311020, 10th, 6, Married - civ - spouse, Farming - fishing, Husband, White, Male, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '914, 34, Private, 175878, Some - college, 10, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '915, 23, Private, 543028, HS - grad, 9, Never - married, Sales, Own - child, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '916, 39, Private, 202027, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 15024, 0, 45, United - States,> 50K'
  ],
  [
    '917, 43, Private, 158926, Masters, 14, Married - civ - spouse, Prof - specialty, Wife, Asian - Pac - Islander, Female, 0, 0, 50, South,<= 50K'
  ],
  [
    '918, 67, Self - emp - inc, 76860, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, Asian - Pac - Islander, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '919, 81, Self - emp - not - inc, 136063, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '920, 21, Private, 186648, Some - college, 10, Never - married, Other - service, Own - child, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '921, 23, Private, 257509, Some - college, 10, Never - married, Sales, Not -in -family, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '922, 25, Private, 98155, Some - college, 10, Never - married, Transport - moving, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '923, 42, Private, 274198, 5th - 6th, 3, Married - civ - spouse, Machine - op - inspct, Wife, White, Female, 0, 0, 38, Mexico,<= 50K'
  ],
  [
    '924, 38, Private, 97083, Some - college, 10, Married - civ - spouse, Adm - clerical, Wife, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '925, 64, Private, 29825, HS - grad, 9, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 5, United - States,<= 50K'
  ],
  [
    '926, 32, Private, 262153, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '927, 37, Private, 214738, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '928, 51, Private, 138022, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '929, 22, Private, 91842, Some - college, 10, Never - married, Sales, Not -in -family, White, Female, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '930, 33, Private, 373662, 1st - 4th, 2, Married - spouse - absent, Priv - house - serv, Not -in -family, White, Female, 0, 0, 40, Guatemala,<= 50K'
  ],
  [
    '931, 42, Private, 162003, HS - grad, 9, Divorced, Machine - op - inspct, Not -in -family, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '932, 19, Private, 52114, Some - college, 10, Never - married, Sales, Own - child, White, Female, 0, 0, 10, United - States,<= 50K'
  ],
  [
    '933, 51, Local - gov, 241843, Preschool, 1, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '934, 23, Private, 375871, HS - grad, 9, Married - civ - spouse, Adm - clerical, Wife, White, Female, 0, 0, 40, Mexico,<= 50K'
  ],
  [
    '935, 37, Private, 186934, 11th, 7, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 3103, 0, 44, United - States,> 50K'
  ],
  [
    '936, 37, Private, 176900, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 99, United - States,> 50K'
  ],
  [
    '937, 47, Private, 21906, Masters, 14, Never - married, Prof - specialty, Not -in -family, White, Female, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '938, 41, Private, 132222, Prof - school, 15, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 2415, 40, United - States,> 50K'
  ],
  [
    '939, 33, Private, 143653, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '940, 31, Private, 111567, Bachelors, 13, Never - married, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '941, 31, Private, 78602, Assoc - acdm, 12, Divorced, Other - service, Unmarried, Amer - Indian - Eskimo, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '942, 35, Private, 465507, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '943, 38, Self - emp - inc, 196373, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '944, 18, Private, 293227, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '945, 20, Private, 241752, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '946, 54, Local - gov, 166398, Some - college, 10, Divorced, Exec - managerial, Unmarried, Black, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '947, 40, Private, 184682, Some - college, 10, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '948, 36, Self - emp - inc, 108293, Bachelors, 13, Married - civ - spouse, Exec - managerial, Wife, White, Female, 0, 1977, 45, United - States,> 50K'
  ],
  [
    '949, 43, Private, 250802, Some - college, 10, Divorced, Craft - repair, Unmarried, White, Male, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '950, 44, Self - emp - not - inc, 325159, Some - college, 10, Divorced, Farming - fishing, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '951, 44, State - gov, 174675, HS - grad, 9, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '952, 43, Private, 227065, Masters, 14, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 43, United - States,> 50K'
  ],
  [
    '953, 51, Private, 269080, 7th - 8th, 4, Widowed, Other - service, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '954, 18, Private, 177722, HS - grad, 9, Never - married, Other - service, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '955, 51, Private, 133461, Some - college, 10, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '956, 41, Private, 239683, 10th, 6, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '957, 44, Self - emp - inc, 398473, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 70, United - States,> 50K'
  ],
  [
    '958, 33, Local - gov, 298785, 10th, 6, Divorced, Transport - moving, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '959, 33, Self - emp - not - inc, 123424, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '960, 42, Private, 176286, Assoc - acdm, 12, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '961, 25, Private, 150062, Some - college, 10, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '962, 32, Private, 169240, HS - grad, 9, Divorced, Machine - op - inspct, Not -in -family, White, Female, 0, 0, 38, United - States,<= 50K'
  ],
  [
    '963, 32, Private, 288273, Bachelors, 13, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 70, Mexico,<= 50K'
  ],
  [
    '964, 36, Private, 526968, 10th, 6, Divorced, Exec - managerial, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '965, 28, Private, 57066, HS - grad, 9, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '966, 20, Private, 323573, HS - grad, 9, Never - married, Other - service, Own - child, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '967, 35, Self - emp - inc, 368825, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 60, United - States,> 50K'
  ],
  [
    '968, 55, Self - emp - not - inc, 189721, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '969, 48, Private, 164966, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, Asian - Pac - Islander, Male, 0, 0, 40, India,> 50K'
  ],
  [
    '970, 36, Private, 94954, Assoc - voc, 11, Widowed, Sales, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '971, 34, Private, 202046, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 35, United - States,> 50K'
  ],
  [
    '972, 28, Private, 161538, Bachelors, 13, Never - married, Tech - support, Not -in -family, White, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '973, 67, Private, 105252, Bachelors, 13, Widowed, Exec - managerial, Not -in -family, White, Male, 0, 2392, 40, United - States,> 50K'
  ],
  [
    '974, 37, Private, 200153, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '975, 44, Private, 32185, HS - grad, 9, Never - married, Transport - moving, Unmarried, White, Male, 0, 0, 70, United - States,<= 50K'
  ],
  [
    '976, 25, Private, 178326, Some - college, 10, Never - married, Sales, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '977, 21, Private, 255957, Some - college, 10, Never - married, Exec - managerial, Not -in -family, White, Female, 4101, 0, 40, United - States,<= 50K'
  ],
  [
    '978, 40, State - gov, 188693, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 35, United - States,> 50K'
  ],
  [
    '979, 78, Private, 182977, HS - grad, 9, Widowed, Other - service, Not -in -family, Black, Female, 2964, 0, 40, United - States,<= 50K'
  ],
  [
    '980, 34, Private, 159929, HS - grad, 9, Divorced, Handlers - cleaners, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '981, 49, Private, 123207, HS - grad, 9, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 44, United - States,<= 50K'
  ],
  [
    '982, 22, Private, 284317, Assoc - acdm, 12, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '983, 23, Private, 184699, HS - grad, 9, Never - married, Sales, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '984, 60, Self - emp - not - inc, 154474, HS - grad, 9, Never - married, Farming - fishing, Unmarried, White, Male, 0, 0, 42, United - States,<= 50K'
  ],
  [
    '985, 45, Local - gov, 318280, HS - grad, 9, Widowed, Protective - serv, Not -in -family, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '986, 63, Private, 254907, Assoc - voc, 11, Divorced, Other - service, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '987, 41, Private, 349221, HS - grad, 9, Never - married, Craft - repair, Own - child, Black, Female, 0, 0, 35, United - States,<= 50K'
  ],
  [
    '988, 47, Private, 335973, HS - grad, 9, Divorced, Adm - clerical, Unmarried, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '989, 44, Private, 126701, HS - grad, 9, Divorced, Craft - repair, Unmarried, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '990, 51, Private, 122159, Some - college, 10, Widowed, Prof - specialty, Not -in -family, White, Female, 3325, 0, 40, United - States,<= 50K'
  ],
  [
    '991, 46, Private, 187370, Bachelors, 13, Never - married, Sales, Not -in -family, White, Male, 0, 1504, 40, United - States,<= 50K'
  ],
  [
    '992, 41, Private, 194636, Assoc - voc, 11, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '993, 50, Self - emp - not - inc, 124793, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '994, 47, Private, 192835, HS - grad, 9, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 50, United - States,> 50K'
  ],
  [
    '995, 35, Private, 290226, HS - grad, 9, Never - married, Exec - managerial, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '996, 56, Private, 112840, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 55, United - States,> 50K'
  ],
  [
    '997, 45, Private, 89325, Masters, 14, Divorced, Prof - specialty, Not -in -family, White, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '998, 48, Federal - gov, 33109, Bachelors, 13, Divorced, Exec - managerial, Unmarried, White, Male, 0, 0, 58, United - States,> 50K'
  ],
  [
    '999, 40, Private, 82465, Some - college, 10, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 2580, 0, 40, United - States,<= 50K'
  ],
  [
    '1000, 39, Self - emp - inc, 329980, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 15024, 0, 50, United - States,> 50K'
  ],
  [
    '1001, 20, Private, 148294, Some - college, 10, Never - married, Other - service, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1002, 50, Private, 168212, Doctorate, 16, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 1902, 65, United - States,> 50K'
  ],
  [
    '1003, 38, State - gov, 343642, HS - grad, 9, Married - civ - spouse, Prof - specialty, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '1004, 23, Local - gov, 115244, Bachelors, 13, Never - married, Prof - specialty, Own - child, White, Female, 0, 0, 60, United - States,<= 50K'
  ],
  [
    '1005, 31, Private, 162572, HS - grad, 9, Never - married, Other - service, Own - child, White, Male, 0, 0, 16, United - States,<= 50K'
  ],
  [
    '1006, 58, Private, 356067, Bachelors, 13, Married - civ - spouse, Adm - clerical, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1007, 66, Private, 271567, HS - grad, 9, Separated, Machine - op - inspct, Not -in -family, Black, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1008, 39, Self - emp - inc, 180804, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 40, United - States,> 50K'
  ],
  [
    '1009, 54, Self - emp - not - inc, 123011, HS - grad, 9, Married - civ - spouse, Craft - repair, Husband, White, Male, 15024, 0, 52, United - States,> 50K'
  ],
  [
    '1010, 26, Private, 109186, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 50, Germany,<= 50K'
  ],
  [
    '1011, 51, Private, 220537, HS - grad, 9, Divorced, Machine - op - inspct, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1012, 34, Private, 124827, Assoc - voc, 11, Never - married, Transport - moving, Own - child, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1013, 50, Private, 767403, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 3103, 0, 40, United - States,> 50K'
  ],
  [
    '1014, 42, Private, 118494, Some - college, 10, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 44, United - States,> 50K'
  ],
  [
    '1015, 38, Private, 173208, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 25, United - States,<= 50K'
  ],
  [
    '1016, 48, Private, 107373, 7th - 8th, 4, Married - civ - spouse, Handlers - cleaners, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1017, 33, Private, 26973, Assoc - voc, 11, Married - civ - spouse, Tech - support, Wife, White, Female, 0, 0, 40, United - States,> 50K'
  ],
  [
    '1018, 51, Private, 191965, HS - grad, 9, Widowed, Other - service, Unmarried, White, Female, 0, 0, 32, United - States,<= 50K'
  ],
  [
    '1019, 22, Private, 122346, HS - grad, 9, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1020, 19, Private, 117201, HS - grad, 9, Never - married, Sales, Own - child, White, Male, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '1021, 41, Private, 198316, Some - college, 10, Never - married, Craft - repair, Not -in -family, White, Male, 0, 0, 50, Japan,<= 50K'
  ],
  [
    '1022, 48, Local - gov, 123075, Masters, 14, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 0, 35, United - States,> 50K'
  ],
  [
    '1023, 42, Private, 209370, HS - grad, 9, Separated, Sales, Not -in -family, White, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '1024, 34, Private, 33117, Some - college, 10, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1025, 23, Private, 129042, HS - grad, 9, Never - married, Machine - op - inspct, Unmarried, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1026, 56, Private, 169133, HS - grad, 9, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 50, Yugoslavia,<= 50K'
  ],
  [
    '1027, 30, Private, 201624, Bachelors, 13, Never - married, Prof - specialty, Not -in -family, Black, Male, 0, 0, 45, United - States,<= 50K'
  ],
  [
    '1028, 45, Private, 368561, HS - grad, 9, Married - civ - spouse, Exec - managerial, Husband, White, Male, 0, 0, 55, United - States,> 50K'
  ],
  [
    '1029, 48, Private, 207848, 10th, 6, Married - civ - spouse, Adm - clerical, Wife, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1030, 48, Self - emp - inc, 138370, Masters, 14, Married - spouse - absent, Sales, Not -in -family, Asian - Pac - Islander, Male, 0, 0, 50, India,<= 50K'
  ],
  [
    '1031, 31, Private, 93106, Assoc - voc, 11, Never - married, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1032, 20, State - gov, 223515, Assoc - acdm, 12, Never - married, Other - service, Own - child, White, Male, 0, 1719, 20, United - States,<= 50K'
  ],
  [
    '1033, 27, Private, 389713, Some - college, 10, Never - married, Sales, Not -in -family, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1034, 32, Private, 206365, HS - grad, 9, Never - married, Other - service, Not -in -family, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1035, 76, Private, 431192, 7th - 8th, 4, Widowed, Sales, Not -in -family, White, Male, 0, 0, 2, United - States,<= 50K'
  ],
  [
    '1036, 19, Private, 241616, HS - grad, 9, Never - married, Sales, Unmarried, White, Male, 0, 2001, 40, United - States,<= 50K'
  ],
  [
    '1037, 66, Self - emp - inc, 150726, 9th, 5, Married - civ - spouse, Exec - managerial, Husband, White, Male, 1409, 0, 1, United - States,<= 50K'
  ],
  [
    '1038, 37, Private, 123785, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Male, 0, 0, 75, United - States,<= 50K'
  ],
  [
    '1039, 34, Private, 289984, HS - grad, 9, Divorced, Priv - house - serv, Unmarried, Black, Female, 0, 0, 30, United - States,<= 50K'
  ],
  [
    '1040, 34, Private, 164309, 11th, 7, Married - civ - spouse, Sales, Wife, White, Female, 0, 0, 8, United - States,<= 50K'
  ],
  [
    '1041, 90, Private, 137018, HS - grad, 9, Never - married, Other - service, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1042, 23, Private, 137994, Some - college, 10, Never - married, Machine - op - inspct, Own - child, Black, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1043, 43, Private, 341204, Some - college, 10, Divorced, Adm - clerical, Not -in -family, White, Female, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1044, 44, Private, 167005, Bachelors, 13, Married - civ - spouse, Exec - managerial, Husband, White, Male, 7688, 0, 60, United - States,> 50K'
  ],
  [
    '1045, 24, Private, 34446, Some - college, 10, Never - married, Tech - support, Not -in -family, White, Female, 0, 0, 37, United - States,<= 50K'
  ],
  [
    '1046, 28, Private, 187160, Prof - school, 15, Divorced, Prof - specialty, Unmarried, White, Male, 0, 0, 55, United - States,<= 50K'
  ],
  [
    '1047, 64, Private, 196288, Assoc - acdm, 12, Never - married, Sales, Not -in -family, White, Female, 0, 0, 20, United - States,<= 50K'
  ],
  [
    '1048, 23, Private, 217961, Some - college, 10, Married - civ - spouse, Other - service, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1049, 20, Private, 74631, Some - college, 10, Never - married, Sales, Not -in -family, White, Female, 0, 0, 50, United - States,<= 50K'
  ],
  [
    '1050, 36, Private, 156667, Bachelors, 13, Married - civ - spouse, Prof - specialty, Husband, White, Male, 0, 1902, 50, United - States,> 50K'
  ],
  [
    '1051, 61, Private, 125155, HS - grad, 9, Married - civ - spouse, Machine - op - inspct, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1052, 53, Self - emp - not - inc, 263925, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, Canada,> 50K'
  ],
  [
    '1053, 30, Private, 296453, Bachelors, 13, Married - civ - spouse, Adm - clerical, Husband, White, Male, 7298, 0, 40, United - States,> 50K'
  ],
  [
    '1054, 52, Self - emp - not - inc, 44728, Some - college, 10, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 55, United - States,> 50K'
  ],
  [
    '1055, 38, Private, 193026, Some - college, 10, Divorced, Craft - repair, Not -in -family, White, Male, 0, 0, 40, Iran,<= 50K'
  ],
  [
    '1056, 32, Private, 87643, Bachelors, 13, Married - civ - spouse, Sales, Husband, White, Male, 0, 0, 40, United - States,<= 50K'
  ],
  [
    '1057, 30, Self - emp - not - inc, 106742, 12th, 8, Married - civ - spouse, Transport - moving, Husband, White, Male, 0, 0, 75, United - States,<= 50K'
  ]
]

export { descriptions }
