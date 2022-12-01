interface Elf {
  foods: Food[];
}

interface Food {
  calories: number;
}

export function day1() {
  console.log("running day 1...");
  part1();
  part2();
}

function part1() {
  const elfs = fromInput(input);

  const answer = elfs.reduce<number>((max, elf) => {
    const caloriesForElf = elf.foods.reduce(
      (total, food) => (total += food.calories),
      0
    );
    return Math.max(max, caloriesForElf);
  }, 0);

  console.log("part1:");
  console.log({ answer });
}

function part2() {
  const elfs = fromInput(input);

  var totalCalories = elfs.map((elf) =>
    elf.foods.reduce((total, food) => (total += food.calories), 0)
  );

  var answer = 0;
  for (let i = 0; i < 3; i++) {
    var max = 0;
    var maxIndex = 0;
    for (let j = 0; j < totalCalories.length; j++) {
      if (totalCalories[j] > max) {
        max = totalCalories[j];
        maxIndex = j;
      }
    }
    answer += max;
    totalCalories = totalCalories.filter((_, index) => index != maxIndex);
  }

  console.log("part2:");
  console.log({ answer });
}

function fromInput(s: string): Elf[] {
  return s.split("\n\n").map((elfLines) =>
    elfLines
      .split("\n")
      .map((line) => +line) //convert string to number
      .map((calories) => ({
        calories,
      }))
      .reduce(
        (elf, food) => {
          elf.foods.push(food);
          return elf;
        },
        { foods: [] } as Elf
      )
  );
}

const input = `18814

1927
12782
8734
10904
9548
1493

4576
4235
2617
1012
2088
1325
1249
5173
4893
3295
2376
2714
6210

6684
5766
3442
4901
4875
4815
5898
2410
5789
4133
3590
1342

8867
7109
2904
5810
3254
4257
2508
3580
5494

11885
14638
11891
4244

11603
17113

8341
2993
7759
7219
2962
8020
6176
6100
6168
5467

8884
11521
3912
2993
13471

3093
4064
9130
7665
10440
6175
7390
10297

29896
7553

3709
5876
3564
3824
7695
6789
4295
1603
2170
1004
7871

5020
1414
2741
6719
2845
6136
6399
1252
3594
5522
7969

5693
2115
11763
9283
12287

7006
5946
10795
1196
7918
5157
7856

4240
2887
11614
5791
11635
3458
11730

4843
8330
7046

6100
4280
5609
6975
3704
3033
4953
8469
4844
6110

12946
25227
10688

2403
1851
2695
3953
5878
2712
2516
5473
3877
1955
5663
1627
2777
3082

56364

4636
6558
2535
3165
2685
4797
6021
5666
4233
1469
7070

7209
2433
7902
3515
5477
9505
5126
9294
4364

8355

2434
1139
2011
3784
1194
2270
6072
5157
3428
3915
2201
1769
3530
4034
3381

1032
6856
6760
5918
5255

37294

5331
8102
3359
3692
6645
10076
8602
2726

1196
3789
9127
15026
10039

44620

33181

7325
5261

6633
1629
13650
13046
9180
13952

8267
4591
7888
5919
3255
3938
5320
6318
1016
5467

4945
4766
4089
6270
5951
3624
1294
2845
6236
2284
6016
6171
2888
3417

7105
3162
5163
6685
5034
5590
3857
1349
3110
3216
5713
4128

3345
5178
2139
6009
3656
3985
2925
1878
5277
2548
5014
4170
2068
5406
3782

4545
3019
4971
5443
4041
2992
2572
1746
6324
2505
4059
4559
3282
6281

2479
1227
1920
1652
7127
5330
5773
7980
5979
1327
6926

5533
4924
4501
1595
5068
1872
1756
6565
4526
2686
1905
4323
4340

6740
9667
7552
1838
4250
8439
2018
9334
4571

5685
2107
3006
1731
2252
2543
4018
6351
1533
5665
2671
2983

7982
5914
7895
1973
6270
1546
1333
6630
7107
5563
1223

3377
1575
6806
6269
5158
5195
2001
1896
8137

4449
2044
1954
4646
4853
2901
4696
3729
2467
5396
1370
5768
3729
1122
2760

5594
3736
4226
5677
1451
5936
3771
1747
4692
1991
3244
5235
2494
1136
2600

60004

10268
7786
8060
10508
5528
6774

1428
16323
9092
17680

1278
3760
4600
5281
3371
4529
2906
5004
4326
4382
3507
1738
3022
1261
2087

2088
5008
6379
4057
3677
5741
1096
3156
4884
5431
3653
6249
1959
4851

3198
1054
5059
1967
5084
4735
1672
1975
3757
5140
4123
1226
5561
3002
1048

4155
6076
4411
4147
1509
1410
1316
2436
5710
3469
5833
3284
2004
5333
2931

3722
6554
4079
3647
6665
2834
6111
1699
2264
3301
4618
6804

18306
2766
15246
16034

10794
8795
6042
14744
8731

9246
15455
7276
1023

4976
5679
3094
6609
3132
6317
7249
3085
2201
4788
3853
7298

6328
8513
10986
8497
3620

8570
6016
3967
7081
2226
3628
1183
7502
2675

3713
4940
3895
5463
1568
1646
1933
4149
4542
5107
2476
6416
5590
4177

1853
3161
5524
4869
4002
4835
5345
3406
3809
6334
3815
4439
4804
4653

2340
1068
6949
4527
2062
1973
7159
6917
7989
5951
3967

7479
1230
6619
5481
4068
6854
1792
6293
2888
7018
4381

43123

12920
10198
13757
10070
3194
10576

26957
29555

5102
11583
4272

5229
1697
7613
1254
3850
3959
3011
8327
1583
5689

3069
5459
1921
4279
2614
3025
1134
2718
3784
3160
2885
5309
3048
3150

15015
5487
11549
16223

1700
1079
5726
2919
4403
4004
4490
4474
5385
4940
2019
2426
1774
5222
4095

2109
1692
3529
4425
5017
1955
2956
5193
1359
3071
5086
3272
1148
1244
5108

3183
5818
5424
3009
9660
10737
7805
4181

4393
2248
6731
1691
1330
2227
3580

3097
6770
4477
2274
10473
6196
6291
10213

4466
1945
4168
3012
5737
2918
1568
6018
3634
2373
2398
1899
5096
6008
2990

6237
4195
4209
6274
5259
6651
6781
4354
7187
2438
1651
1455

5091
5021
1578
1839
2447
1410
1551
1273
2870
2060
6062
4994
4425
1142
2121

25078
34262

3027
1504
2559
3905
4918
1442
5269
1792
1787
7325
2833
6804

10472
3468
6981
4162
5889
10528
3516
4516

5317
1944
2244
1565
2805
2058
3249
5589
5225
4472
4292
4096
1682
3780
4732

2155
1915
1390
6056
4997
5247
3565
5359
4920
3193
6103
5942

5728
1735
2890
2208
4913
3879
6078
3237
2997
3109
1150
4648

4368
6370
5658
2440
3404
1849
5650
3261
4920
4114
3673
6330
4183
5309

3227
2526
7386
6005
5441
8946
2415
8447
9143

2211
5669
1077
3134
1072
3419
5779
3499
5291
2636
5031
4309
4030
6032
3512

40358

31692
14965

12952
19656
13010
15201

3398
5373
2074
4864
2925
3543
4632
2032
1007
5758
2815
5935
3093
1169
2964

8110
12093
13122
3915
7332
12319

4963
5227
1525
8650
6907
2828
8473
5287
8196
2071

12969
22624

6327
5381
1572
2113
10240
5360
10614
2960

3800
11368
9929
12344
5461
11666

19639
14660
7046

4562
1583
2616
5800
6350
3762
6491
1047
3559
1388
4772
6413
3066

10721
10685
3925
1461
4136
3510
3989
9199

2538
4798
2645
3236
1113
1155
3634
2228
1475
2261
4527
1498
2891
6087
2632

16730
3334
9006
3657

5665
5504
3037
10040
6716
3769
3756

3537
2809
6097
8067
3411
4135
7782
3367
1799
3663

10185
6481
11360
6493
10001
7424
9674

5844
12305
7993
1325
10357
9896

9400
6803
3442
5199
9582
2029
2664
1211
2642

1069
8063
2822
3453
2786
5941
6783
1145
6080
2862
7190

5080
6563
5357
4338
1616
10436
3433

5512
2337
3013
1399
1058
1381
3681
2549
2204
4949
2928
1027
2538
5636
2195

1847
3848
1883
6559
2248
3401
2301
5408
2119
4829
6262
3358
6641

16613

4989
4027
2571
1680
6420
5858
2363
1007
1410
5902
3149
4577
2635

3689
1667
2261
5602
6024
4590
5938
4165
3867
5605
2519
2179
4325
5723
2871

4223
5264
1189
5439
2576
6225
1931
1656
7521
1963

8246
6922
4192

3380
3689
4228
4975
5185
2469
2912
5014
5115
1276
5895
5189
5345
4321
3142

1190
10126
15028
7406

7153
9689
11330

2185
1658
4927
4138
5015
3019
4896
3345
2600
2515
4061
4969
4687
5080
1922

1780
5589
5777
2203
2353
4076
4638
4756
4865
2753
5506
3414
3719

10077
1961
6853
7785
8162
3223
9308
9503

1696
5954
2794
5953
3074
2389
7979
5520
6627
2819

4776
1103
3523
3588
6149
4018
1723
3324

11150
1707
13525
8213
2115

1948
9407
11624
12246
13241
7043

3025
2063
2533
5294
1735
5824
2922
1040
4752
6320
4472
5532
5041

5642
6205
11345
9931
2197
9651
6873

16801
1179
10958
13260

4806
1169
3454
5784
3091
5289
2835
1945
4995
2012
3479
6390
1073
5500

3531
13321
15104
7899
6287

27261
4225

3104
3965
1952
6493
6428
6560
2107
8364
6541
5709

4137
6331
4564
6203
2540
6225
3827
5882
3418
2746
6495
2909
1959
2494

1023
5984
1720
3188
6562
6538
2771
6244
1907
5438
4087

1788
6484
3614
7220
1555
2074
7860
6665
2814
1285
3140

2610
4711
1414
2611
1544
7094
5717

4738
6092
5271
1795
3592
1606
6309
4606
1354
3735
6498
5722
1048

7759
5334
4561
2429
15468

3489
8962
9009
8949
9558
3251
4945
2435

9471
19225
5466

1866
1611
1755
5344
6266
5702
1343
2770
6189
4469
1904
3896
1310
4909

24923
18003

14439
15042
14350
15488

3595
1976
1704
4463
5015
1484
3441
6461
3157
7163
1467
6890

5114
2338
1229
6747
6572
2729
5368
5234
6391
3476
4258

5163
4280
4165
1931
2772
3169
1887
4250
5460
5836
2477
2074
4638
4139
3204

19251
1614
11101
4036

3734
1477
13557
11678
9239
3743

3439
3959
7006
6420
7061
1813
4983
9419
3415

4075
8560
11281
5341

9383
14432
8873
8749

4262
1078
4405
5033
4781
5649
3659
3554
4879
5744
6101
2207
4144
3892

7208
11645
25286

4647
2767
4968
9196
6695
1732
5918
5934

7804
1097
8520
4513
8217
10678
1977
3678

11457
11769
12118
8118
8778
7656
7419

6814
5716
2112
4511
4826
1274
8088
6427
1906
8193

6796
1284
4977
5446
3087
6057
5189
5946
3621
1966
2078
1367

1423
1634
5851
5565
2436
5611
7167
6055
4745
3762
4920
7141

4514
18029

2173
7851
13687

7949
7418
7395
7837
11702
3934
7268

4418
6659
1116
2260
2673
3066
6605
2151
6445
4091
5630
6108
2065

34083

20266
26662

1107
3659
5578
3698
6529
1530
5096
6756
4420
5647
6321
5952

8199
4504
6056
9281
4129
4489
1301
5419
7976

2418
4557
4607
5361
3364
2998
1216
5563
4864
5017
4026
3729
4164
5482
1893

10335

3749
29027

12334
15815
14747
8990
12054

39307

9347

1924
9058
14219

4200
4950
6751
2879
4412
6649
1453
1175
3380
6612
3828
2224
4101

5166
2143
7193
1109
5859
3587
7319
3578
6272
4546
4928
4686

6162
28361

4756
6015
4766
5722
4379
3490
5431
1526
1948
5237
5531
5395
4601
5844
4016

27000
15558

7099
16480
6533
18750

11523
21417

5633
4294
2149
5611
2006
3871
3215
6970
3457
1546
6646
3536

2994
4450
3218
5868
5097
3030
5412
1989
6882
5868
5471
5722
5620

4077
7320
6705
1180
2240
7895
6841
1830
3428
2364
4641

2115
5373
4997
5593
1120
1603
5843
6059
4762
3509
3427
3718
3790
5281

3830
1503
3585
2638
2645
1007
4034
5357
3322
2172
6370
5275
1648
3700

6642
5243
13395
2913
12697

10054
5070
16403
5567
16260

25612
12129
5607

4096
2849
6717
6832
8067
7566
5627
1761
3414
3261

8681
2629
4786
7807
8511
2419
2637
6374
7707
1199

1335
6134
4672
5644
5746
8095
3526
3243

2802
1970
8067
3467
3186
4981
2459
8414
5350
2343

4051
4180
6227
1401
6469
3463
7297
2570
6420
4883
5563
2934

1785
4270
3186
4012
8204
4087
7291
6408
8390

3351
4368
2956
5319
1735
1665
2544
5050
4567
4129
3288
3057
4358
1061
4567

5567
4350
3055
1681
4082
1849
5689
1995
5573
3214
1693
3678
4958
2775
1385

15216
5215
11727

12555
12648
8124
5154
7667

10520
6081
16400
3448
6408

68455

26218

11917
4452
14142
8815
13475

4430
8657
2661
7283
5656

13776
4264
15529
16476

6032
10966
3499
6399
3107
7287
4748

1118
2057
2205
4721
4949
7969
5709
4699
4111
5100
1716

5760
4313
4368
3987
6289
3042
6007
5799
4406
4309
5816
5109
1109
2257

6186
3812
5595
4236
6718
3194
4178
1152
5631
3070
5402
2471
4489

6235
1040
2898
4618
1528
2394
6739
3492
4651
1458
2159
5166
3760

4421
5360
3586
5219
1191
3315
3087
6239
5340
6375
3885
6142
5395
1325

5908
3428
1580
8854
7674
6783
3143

68497

3036
8215
2179
6773
8316
6011
6037
5670
7097

7830
6209
1223
1431
1020
4133
6997
7137
4744
2231
4664

1447
2708
5687
3958
2020
1440
4154
1099
2180
1350
2373
4713
4490
4826
4132

4519
2370
4404
2085
5084
3342
1952
4132
5152
3370
2958
6152
6281

8688
5261
14869
7408
1789

5319
6704
1173
2404
4081
5783
2538
2725
5682
5151
1016
4692

15712
2371
15487
7088
7550

2036
6286
1362
4833
3897
4488
7093
2114
4553
4644
2014

7265
4039
4651
6351
3695
6958
6388
5849
4218
1095
6862
5034

13093
10728
1093
6368
9357

9257

6583
9137
13032
14163

6674
6220
9299
7534
2674
3144
3926
7519
8135

7207
8978
8371
4569
3486
1132
9219
3406
8054

3298
1198
2238
4091
6469
3444
2982
4702
3283
3008
1585
2615
5732
1548

3857
4772
5318
3561
5852
5463
6379
4695
4863
5184
3930
3871
6221
5660

4785
8879
2905
11710
4284
7761
10781

13650
19208
2344

8569
3740
6560
4918
8880
8863
7939
4336
7011

2667
1542
2663
5613
3498
5582
2221
3450
1197
1689
2995
5470
2690
3276
4921

3855
7774
1732
2700
4298
9114
8771
3158

6031
3440
5887
1245
3021
5776
1208
1994
2411
4057
2959
1907
1619
2028
3623

9806
3996
5730
10168
1726
7068

5828
9183
7422
5496
1545
2606
7731
3582
8998

4087
5317
6045
4977
3043
6360
3730
2012
4994
7160
6253`;
