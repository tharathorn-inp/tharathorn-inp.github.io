/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 559.0, "minX": 0.0, "maxY": 4803.0, "series": [{"data": [[0.0, 559.0], [0.1, 602.0], [0.2, 624.0], [0.3, 635.0], [0.4, 644.0], [0.5, 650.0], [0.6, 654.0], [0.7, 658.0], [0.8, 661.0], [0.9, 664.0], [1.0, 667.0], [1.1, 669.0], [1.2, 671.0], [1.3, 673.0], [1.4, 675.0], [1.5, 676.0], [1.6, 678.0], [1.7, 680.0], [1.8, 682.0], [1.9, 684.0], [2.0, 685.0], [2.1, 687.0], [2.2, 688.0], [2.3, 689.0], [2.4, 691.0], [2.5, 692.0], [2.6, 692.0], [2.7, 694.0], [2.8, 695.0], [2.9, 696.0], [3.0, 697.0], [3.1, 698.0], [3.2, 699.0], [3.3, 700.0], [3.4, 701.0], [3.5, 701.0], [3.6, 702.0], [3.7, 703.0], [3.8, 704.0], [3.9, 705.0], [4.0, 706.0], [4.1, 707.0], [4.2, 708.0], [4.3, 708.0], [4.4, 709.0], [4.5, 710.0], [4.6, 710.0], [4.7, 711.0], [4.8, 712.0], [4.9, 713.0], [5.0, 713.0], [5.1, 714.0], [5.2, 715.0], [5.3, 715.0], [5.4, 716.0], [5.5, 716.0], [5.6, 717.0], [5.7, 718.0], [5.8, 718.0], [5.9, 719.0], [6.0, 719.0], [6.1, 720.0], [6.2, 720.0], [6.3, 721.0], [6.4, 721.0], [6.5, 722.0], [6.6, 722.0], [6.7, 723.0], [6.8, 724.0], [6.9, 724.0], [7.0, 725.0], [7.1, 725.0], [7.2, 726.0], [7.3, 726.0], [7.4, 727.0], [7.5, 727.0], [7.6, 728.0], [7.7, 728.0], [7.8, 729.0], [7.9, 729.0], [8.0, 730.0], [8.1, 730.0], [8.2, 731.0], [8.3, 731.0], [8.4, 732.0], [8.5, 732.0], [8.6, 732.0], [8.7, 733.0], [8.8, 733.0], [8.9, 734.0], [9.0, 734.0], [9.1, 735.0], [9.2, 735.0], [9.3, 735.0], [9.4, 736.0], [9.5, 736.0], [9.6, 737.0], [9.7, 737.0], [9.8, 738.0], [9.9, 738.0], [10.0, 739.0], [10.1, 739.0], [10.2, 739.0], [10.3, 740.0], [10.4, 740.0], [10.5, 741.0], [10.6, 741.0], [10.7, 742.0], [10.8, 742.0], [10.9, 742.0], [11.0, 743.0], [11.1, 743.0], [11.2, 744.0], [11.3, 744.0], [11.4, 744.0], [11.5, 745.0], [11.6, 745.0], [11.7, 745.0], [11.8, 746.0], [11.9, 746.0], [12.0, 747.0], [12.1, 747.0], [12.2, 747.0], [12.3, 748.0], [12.4, 748.0], [12.5, 748.0], [12.6, 749.0], [12.7, 749.0], [12.8, 750.0], [12.9, 750.0], [13.0, 750.0], [13.1, 751.0], [13.2, 751.0], [13.3, 751.0], [13.4, 752.0], [13.5, 752.0], [13.6, 752.0], [13.7, 753.0], [13.8, 753.0], [13.9, 753.0], [14.0, 754.0], [14.1, 754.0], [14.2, 755.0], [14.3, 755.0], [14.4, 755.0], [14.5, 756.0], [14.6, 756.0], [14.7, 756.0], [14.8, 757.0], [14.9, 757.0], [15.0, 757.0], [15.1, 758.0], [15.2, 758.0], [15.3, 759.0], [15.4, 759.0], [15.5, 759.0], [15.6, 760.0], [15.7, 760.0], [15.8, 760.0], [15.9, 760.0], [16.0, 761.0], [16.1, 761.0], [16.2, 762.0], [16.3, 762.0], [16.4, 762.0], [16.5, 763.0], [16.6, 763.0], [16.7, 763.0], [16.8, 764.0], [16.9, 764.0], [17.0, 764.0], [17.1, 765.0], [17.2, 765.0], [17.3, 765.0], [17.4, 766.0], [17.5, 766.0], [17.6, 766.0], [17.7, 767.0], [17.8, 767.0], [17.9, 767.0], [18.0, 767.0], [18.1, 768.0], [18.2, 768.0], [18.3, 768.0], [18.4, 768.0], [18.5, 769.0], [18.6, 769.0], [18.7, 769.0], [18.8, 770.0], [18.9, 770.0], [19.0, 770.0], [19.1, 771.0], [19.2, 771.0], [19.3, 771.0], [19.4, 772.0], [19.5, 772.0], [19.6, 772.0], [19.7, 772.0], [19.8, 773.0], [19.9, 773.0], [20.0, 773.0], [20.1, 774.0], [20.2, 774.0], [20.3, 775.0], [20.4, 775.0], [20.5, 775.0], [20.6, 775.0], [20.7, 776.0], [20.8, 776.0], [20.9, 776.0], [21.0, 777.0], [21.1, 777.0], [21.2, 777.0], [21.3, 778.0], [21.4, 778.0], [21.5, 778.0], [21.6, 779.0], [21.7, 779.0], [21.8, 779.0], [21.9, 780.0], [22.0, 780.0], [22.1, 780.0], [22.2, 781.0], [22.3, 781.0], [22.4, 781.0], [22.5, 781.0], [22.6, 782.0], [22.7, 782.0], [22.8, 782.0], [22.9, 783.0], [23.0, 783.0], [23.1, 783.0], [23.2, 784.0], [23.3, 784.0], [23.4, 784.0], [23.5, 785.0], [23.6, 785.0], [23.7, 785.0], [23.8, 786.0], [23.9, 786.0], [24.0, 786.0], [24.1, 787.0], [24.2, 787.0], [24.3, 787.0], [24.4, 788.0], [24.5, 788.0], [24.6, 788.0], [24.7, 789.0], [24.8, 789.0], [24.9, 789.0], [25.0, 790.0], [25.1, 790.0], [25.2, 790.0], [25.3, 791.0], [25.4, 791.0], [25.5, 791.0], [25.6, 792.0], [25.7, 792.0], [25.8, 792.0], [25.9, 793.0], [26.0, 793.0], [26.1, 793.0], [26.2, 794.0], [26.3, 794.0], [26.4, 794.0], [26.5, 794.0], [26.6, 795.0], [26.7, 795.0], [26.8, 796.0], [26.9, 796.0], [27.0, 796.0], [27.1, 797.0], [27.2, 797.0], [27.3, 797.0], [27.4, 797.0], [27.5, 798.0], [27.6, 798.0], [27.7, 798.0], [27.8, 798.0], [27.9, 799.0], [28.0, 799.0], [28.1, 799.0], [28.2, 800.0], [28.3, 800.0], [28.4, 800.0], [28.5, 801.0], [28.6, 801.0], [28.7, 801.0], [28.8, 802.0], [28.9, 802.0], [29.0, 802.0], [29.1, 803.0], [29.2, 803.0], [29.3, 803.0], [29.4, 804.0], [29.5, 804.0], [29.6, 804.0], [29.7, 805.0], [29.8, 805.0], [29.9, 805.0], [30.0, 805.0], [30.1, 806.0], [30.2, 806.0], [30.3, 806.0], [30.4, 807.0], [30.5, 807.0], [30.6, 807.0], [30.7, 808.0], [30.8, 808.0], [30.9, 808.0], [31.0, 809.0], [31.1, 809.0], [31.2, 809.0], [31.3, 810.0], [31.4, 810.0], [31.5, 810.0], [31.6, 811.0], [31.7, 811.0], [31.8, 811.0], [31.9, 812.0], [32.0, 812.0], [32.1, 812.0], [32.2, 813.0], [32.3, 813.0], [32.4, 813.0], [32.5, 814.0], [32.6, 814.0], [32.7, 814.0], [32.8, 815.0], [32.9, 815.0], [33.0, 815.0], [33.1, 816.0], [33.2, 816.0], [33.3, 816.0], [33.4, 817.0], [33.5, 817.0], [33.6, 817.0], [33.7, 818.0], [33.8, 818.0], [33.9, 818.0], [34.0, 818.0], [34.1, 819.0], [34.2, 819.0], [34.3, 820.0], [34.4, 820.0], [34.5, 820.0], [34.6, 820.0], [34.7, 821.0], [34.8, 821.0], [34.9, 821.0], [35.0, 822.0], [35.1, 822.0], [35.2, 822.0], [35.3, 823.0], [35.4, 823.0], [35.5, 823.0], [35.6, 824.0], [35.7, 824.0], [35.8, 824.0], [35.9, 825.0], [36.0, 825.0], [36.1, 825.0], [36.2, 826.0], [36.3, 826.0], [36.4, 826.0], [36.5, 826.0], [36.6, 827.0], [36.7, 827.0], [36.8, 828.0], [36.9, 828.0], [37.0, 828.0], [37.1, 829.0], [37.2, 829.0], [37.3, 829.0], [37.4, 830.0], [37.5, 830.0], [37.6, 830.0], [37.7, 831.0], [37.8, 831.0], [37.9, 831.0], [38.0, 832.0], [38.1, 832.0], [38.2, 832.0], [38.3, 833.0], [38.4, 833.0], [38.5, 833.0], [38.6, 834.0], [38.7, 834.0], [38.8, 834.0], [38.9, 835.0], [39.0, 835.0], [39.1, 835.0], [39.2, 836.0], [39.3, 836.0], [39.4, 836.0], [39.5, 837.0], [39.6, 837.0], [39.7, 838.0], [39.8, 838.0], [39.9, 838.0], [40.0, 839.0], [40.1, 839.0], [40.2, 839.0], [40.3, 840.0], [40.4, 840.0], [40.5, 840.0], [40.6, 841.0], [40.7, 841.0], [40.8, 841.0], [40.9, 842.0], [41.0, 842.0], [41.1, 842.0], [41.2, 843.0], [41.3, 843.0], [41.4, 843.0], [41.5, 844.0], [41.6, 844.0], [41.7, 845.0], [41.8, 845.0], [41.9, 845.0], [42.0, 845.0], [42.1, 846.0], [42.2, 846.0], [42.3, 847.0], [42.4, 847.0], [42.5, 847.0], [42.6, 848.0], [42.7, 848.0], [42.8, 848.0], [42.9, 849.0], [43.0, 849.0], [43.1, 849.0], [43.2, 850.0], [43.3, 850.0], [43.4, 851.0], [43.5, 851.0], [43.6, 851.0], [43.7, 852.0], [43.8, 852.0], [43.9, 853.0], [44.0, 853.0], [44.1, 853.0], [44.2, 854.0], [44.3, 854.0], [44.4, 854.0], [44.5, 854.0], [44.6, 855.0], [44.7, 855.0], [44.8, 856.0], [44.9, 856.0], [45.0, 856.0], [45.1, 857.0], [45.2, 857.0], [45.3, 857.0], [45.4, 858.0], [45.5, 858.0], [45.6, 858.0], [45.7, 859.0], [45.8, 859.0], [45.9, 859.0], [46.0, 860.0], [46.1, 860.0], [46.2, 860.0], [46.3, 861.0], [46.4, 861.0], [46.5, 861.0], [46.6, 862.0], [46.7, 862.0], [46.8, 863.0], [46.9, 863.0], [47.0, 863.0], [47.1, 864.0], [47.2, 864.0], [47.3, 864.0], [47.4, 865.0], [47.5, 865.0], [47.6, 865.0], [47.7, 866.0], [47.8, 866.0], [47.9, 866.0], [48.0, 867.0], [48.1, 867.0], [48.2, 867.0], [48.3, 868.0], [48.4, 868.0], [48.5, 868.0], [48.6, 869.0], [48.7, 869.0], [48.8, 870.0], [48.9, 870.0], [49.0, 871.0], [49.1, 871.0], [49.2, 871.0], [49.3, 872.0], [49.4, 872.0], [49.5, 873.0], [49.6, 873.0], [49.7, 873.0], [49.8, 874.0], [49.9, 874.0], [50.0, 874.0], [50.1, 875.0], [50.2, 875.0], [50.3, 875.0], [50.4, 876.0], [50.5, 876.0], [50.6, 877.0], [50.7, 877.0], [50.8, 877.0], [50.9, 878.0], [51.0, 878.0], [51.1, 878.0], [51.2, 879.0], [51.3, 879.0], [51.4, 880.0], [51.5, 880.0], [51.6, 880.0], [51.7, 881.0], [51.8, 881.0], [51.9, 882.0], [52.0, 882.0], [52.1, 882.0], [52.2, 883.0], [52.3, 883.0], [52.4, 883.0], [52.5, 884.0], [52.6, 884.0], [52.7, 885.0], [52.8, 885.0], [52.9, 885.0], [53.0, 886.0], [53.1, 886.0], [53.2, 887.0], [53.3, 887.0], [53.4, 887.0], [53.5, 888.0], [53.6, 888.0], [53.7, 889.0], [53.8, 889.0], [53.9, 890.0], [54.0, 890.0], [54.1, 890.0], [54.2, 891.0], [54.3, 891.0], [54.4, 891.0], [54.5, 892.0], [54.6, 892.0], [54.7, 893.0], [54.8, 893.0], [54.9, 894.0], [55.0, 894.0], [55.1, 895.0], [55.2, 895.0], [55.3, 895.0], [55.4, 896.0], [55.5, 896.0], [55.6, 897.0], [55.7, 897.0], [55.8, 898.0], [55.9, 898.0], [56.0, 898.0], [56.1, 899.0], [56.2, 899.0], [56.3, 900.0], [56.4, 900.0], [56.5, 900.0], [56.6, 901.0], [56.7, 901.0], [56.8, 902.0], [56.9, 902.0], [57.0, 903.0], [57.1, 903.0], [57.2, 903.0], [57.3, 904.0], [57.4, 904.0], [57.5, 904.0], [57.6, 905.0], [57.7, 905.0], [57.8, 906.0], [57.9, 906.0], [58.0, 906.0], [58.1, 907.0], [58.2, 907.0], [58.3, 908.0], [58.4, 908.0], [58.5, 908.0], [58.6, 909.0], [58.7, 909.0], [58.8, 909.0], [58.9, 910.0], [59.0, 910.0], [59.1, 911.0], [59.2, 911.0], [59.3, 911.0], [59.4, 912.0], [59.5, 912.0], [59.6, 912.0], [59.7, 913.0], [59.8, 913.0], [59.9, 914.0], [60.0, 914.0], [60.1, 915.0], [60.2, 915.0], [60.3, 915.0], [60.4, 916.0], [60.5, 916.0], [60.6, 917.0], [60.7, 917.0], [60.8, 917.0], [60.9, 917.0], [61.0, 918.0], [61.1, 918.0], [61.2, 918.0], [61.3, 918.0], [61.4, 918.0], [61.5, 919.0], [61.6, 919.0], [61.7, 919.0], [61.8, 919.0], [61.9, 919.0], [62.0, 919.0], [62.1, 920.0], [62.2, 920.0], [62.3, 920.0], [62.4, 920.0], [62.5, 920.0], [62.6, 920.0], [62.7, 920.0], [62.8, 920.0], [62.9, 921.0], [63.0, 921.0], [63.1, 921.0], [63.2, 921.0], [63.3, 921.0], [63.4, 921.0], [63.5, 921.0], [63.6, 921.0], [63.7, 921.0], [63.8, 921.0], [63.9, 922.0], [64.0, 922.0], [64.1, 922.0], [64.2, 922.0], [64.3, 922.0], [64.4, 922.0], [64.5, 922.0], [64.6, 922.0], [64.7, 922.0], [64.8, 922.0], [64.9, 923.0], [65.0, 923.0], [65.1, 923.0], [65.2, 923.0], [65.3, 923.0], [65.4, 923.0], [65.5, 923.0], [65.6, 923.0], [65.7, 924.0], [65.8, 924.0], [65.9, 924.0], [66.0, 924.0], [66.1, 924.0], [66.2, 925.0], [66.3, 925.0], [66.4, 925.0], [66.5, 925.0], [66.6, 925.0], [66.7, 926.0], [66.8, 926.0], [66.9, 926.0], [67.0, 927.0], [67.1, 927.0], [67.2, 927.0], [67.3, 928.0], [67.4, 928.0], [67.5, 929.0], [67.6, 929.0], [67.7, 929.0], [67.8, 930.0], [67.9, 930.0], [68.0, 931.0], [68.1, 931.0], [68.2, 932.0], [68.3, 932.0], [68.4, 933.0], [68.5, 933.0], [68.6, 934.0], [68.7, 934.0], [68.8, 935.0], [68.9, 935.0], [69.0, 936.0], [69.1, 936.0], [69.2, 936.0], [69.3, 937.0], [69.4, 938.0], [69.5, 938.0], [69.6, 939.0], [69.7, 939.0], [69.8, 939.0], [69.9, 940.0], [70.0, 940.0], [70.1, 941.0], [70.2, 941.0], [70.3, 942.0], [70.4, 942.0], [70.5, 943.0], [70.6, 943.0], [70.7, 944.0], [70.8, 944.0], [70.9, 945.0], [71.0, 945.0], [71.1, 946.0], [71.2, 946.0], [71.3, 947.0], [71.4, 947.0], [71.5, 948.0], [71.6, 948.0], [71.7, 948.0], [71.8, 949.0], [71.9, 949.0], [72.0, 950.0], [72.1, 950.0], [72.2, 951.0], [72.3, 951.0], [72.4, 952.0], [72.5, 952.0], [72.6, 953.0], [72.7, 954.0], [72.8, 954.0], [72.9, 955.0], [73.0, 955.0], [73.1, 956.0], [73.2, 956.0], [73.3, 956.0], [73.4, 957.0], [73.5, 958.0], [73.6, 958.0], [73.7, 959.0], [73.8, 959.0], [73.9, 960.0], [74.0, 960.0], [74.1, 961.0], [74.2, 961.0], [74.3, 962.0], [74.4, 963.0], [74.5, 963.0], [74.6, 964.0], [74.7, 964.0], [74.8, 965.0], [74.9, 966.0], [75.0, 967.0], [75.1, 967.0], [75.2, 968.0], [75.3, 969.0], [75.4, 969.0], [75.5, 970.0], [75.6, 971.0], [75.7, 971.0], [75.8, 972.0], [75.9, 972.0], [76.0, 973.0], [76.1, 973.0], [76.2, 974.0], [76.3, 975.0], [76.4, 975.0], [76.5, 976.0], [76.6, 977.0], [76.7, 977.0], [76.8, 978.0], [76.9, 978.0], [77.0, 979.0], [77.1, 980.0], [77.2, 980.0], [77.3, 981.0], [77.4, 981.0], [77.5, 982.0], [77.6, 982.0], [77.7, 983.0], [77.8, 984.0], [77.9, 985.0], [78.0, 985.0], [78.1, 986.0], [78.2, 987.0], [78.3, 987.0], [78.4, 988.0], [78.5, 988.0], [78.6, 989.0], [78.7, 990.0], [78.8, 990.0], [78.9, 991.0], [79.0, 991.0], [79.1, 992.0], [79.2, 993.0], [79.3, 994.0], [79.4, 994.0], [79.5, 995.0], [79.6, 996.0], [79.7, 997.0], [79.8, 997.0], [79.9, 998.0], [80.0, 998.0], [80.1, 999.0], [80.2, 1000.0], [80.3, 1000.0], [80.4, 1001.0], [80.5, 1001.0], [80.6, 1002.0], [80.7, 1003.0], [80.8, 1003.0], [80.9, 1004.0], [81.0, 1005.0], [81.1, 1006.0], [81.2, 1007.0], [81.3, 1008.0], [81.4, 1008.0], [81.5, 1009.0], [81.6, 1010.0], [81.7, 1011.0], [81.8, 1012.0], [81.9, 1012.0], [82.0, 1013.0], [82.1, 1014.0], [82.2, 1015.0], [82.3, 1016.0], [82.4, 1017.0], [82.5, 1017.0], [82.6, 1018.0], [82.7, 1019.0], [82.8, 1020.0], [82.9, 1020.0], [83.0, 1021.0], [83.1, 1022.0], [83.2, 1022.0], [83.3, 1023.0], [83.4, 1024.0], [83.5, 1024.0], [83.6, 1025.0], [83.7, 1026.0], [83.8, 1027.0], [83.9, 1027.0], [84.0, 1028.0], [84.1, 1029.0], [84.2, 1030.0], [84.3, 1032.0], [84.4, 1033.0], [84.5, 1033.0], [84.6, 1035.0], [84.7, 1036.0], [84.8, 1037.0], [84.9, 1039.0], [85.0, 1040.0], [85.1, 1041.0], [85.2, 1043.0], [85.3, 1044.0], [85.4, 1045.0], [85.5, 1046.0], [85.6, 1048.0], [85.7, 1049.0], [85.8, 1051.0], [85.9, 1052.0], [86.0, 1053.0], [86.1, 1054.0], [86.2, 1055.0], [86.3, 1057.0], [86.4, 1058.0], [86.5, 1060.0], [86.6, 1062.0], [86.7, 1063.0], [86.8, 1065.0], [86.9, 1067.0], [87.0, 1068.0], [87.1, 1070.0], [87.2, 1072.0], [87.3, 1074.0], [87.4, 1075.0], [87.5, 1077.0], [87.6, 1078.0], [87.7, 1079.0], [87.8, 1081.0], [87.9, 1083.0], [88.0, 1084.0], [88.1, 1085.0], [88.2, 1087.0], [88.3, 1088.0], [88.4, 1090.0], [88.5, 1092.0], [88.6, 1095.0], [88.7, 1097.0], [88.8, 1099.0], [88.9, 1100.0], [89.0, 1102.0], [89.1, 1103.0], [89.2, 1105.0], [89.3, 1107.0], [89.4, 1109.0], [89.5, 1111.0], [89.6, 1113.0], [89.7, 1115.0], [89.8, 1118.0], [89.9, 1119.0], [90.0, 1121.0], [90.1, 1123.0], [90.2, 1125.0], [90.3, 1126.0], [90.4, 1128.0], [90.5, 1130.0], [90.6, 1132.0], [90.7, 1134.0], [90.8, 1136.0], [90.9, 1138.0], [91.0, 1139.0], [91.1, 1141.0], [91.2, 1144.0], [91.3, 1146.0], [91.4, 1148.0], [91.5, 1150.0], [91.6, 1152.0], [91.7, 1154.0], [91.8, 1156.0], [91.9, 1157.0], [92.0, 1158.0], [92.1, 1160.0], [92.2, 1162.0], [92.3, 1164.0], [92.4, 1167.0], [92.5, 1169.0], [92.6, 1170.0], [92.7, 1172.0], [92.8, 1173.0], [92.9, 1175.0], [93.0, 1177.0], [93.1, 1178.0], [93.2, 1180.0], [93.3, 1182.0], [93.4, 1184.0], [93.5, 1187.0], [93.6, 1189.0], [93.7, 1191.0], [93.8, 1193.0], [93.9, 1196.0], [94.0, 1198.0], [94.1, 1201.0], [94.2, 1203.0], [94.3, 1206.0], [94.4, 1208.0], [94.5, 1211.0], [94.6, 1213.0], [94.7, 1216.0], [94.8, 1219.0], [94.9, 1221.0], [95.0, 1224.0], [95.1, 1225.0], [95.2, 1227.0], [95.3, 1227.0], [95.4, 1228.0], [95.5, 1229.0], [95.6, 1230.0], [95.7, 1230.0], [95.8, 1231.0], [95.9, 1233.0], [96.0, 1237.0], [96.1, 1241.0], [96.2, 1245.0], [96.3, 1249.0], [96.4, 1252.0], [96.5, 1255.0], [96.6, 1259.0], [96.7, 1263.0], [96.8, 1269.0], [96.9, 1273.0], [97.0, 1277.0], [97.1, 1281.0], [97.2, 1286.0], [97.3, 1291.0], [97.4, 1295.0], [97.5, 1300.0], [97.6, 1305.0], [97.7, 1309.0], [97.8, 1312.0], [97.9, 1317.0], [98.0, 1323.0], [98.1, 1330.0], [98.2, 1334.0], [98.3, 1339.0], [98.4, 1342.0], [98.5, 1346.0], [98.6, 1355.0], [98.7, 1363.0], [98.8, 1369.0], [98.9, 1380.0], [99.0, 1388.0], [99.1, 1397.0], [99.2, 1409.0], [99.3, 1429.0], [99.4, 1452.0], [99.5, 1502.0], [99.6, 1540.0], [99.7, 1595.0], [99.8, 1883.0], [99.9, 4103.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 9331.0, "series": [{"data": [[600.0, 1052.0], [700.0, 8235.0], [800.0, 9331.0], [900.0, 7918.0], [1000.0, 2863.0], [1100.0, 1729.0], [1200.0, 1138.0], [1300.0, 547.0], [1400.0, 119.0], [1500.0, 69.0], [1600.0, 14.0], [1700.0, 6.0], [1800.0, 16.0], [1900.0, 3.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 2.0], [2300.0, 1.0], [3700.0, 2.0], [3800.0, 5.0], [3900.0, 5.0], [4000.0, 4.0], [4300.0, 5.0], [4200.0, 4.0], [4100.0, 5.0], [4500.0, 2.0], [4600.0, 9.0], [4400.0, 7.0], [4700.0, 1.0], [4800.0, 1.0], [500.0, 28.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 2,500ms"], [1, "Requests having \nresponse time > 2,500ms and <= 5,000ms"], [2, "Requests having \nresponse time > 5,000ms"], [3, "Requests in error"]], "maxY": 33077.0, "series": [{"data": [[0.0, 33077.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 2,500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 2,500ms and <= 5,000ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 5,000ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 49.53409961685823, "minX": 1.55923446E12, "maxY": 50.0, "series": [{"data": [[1.559235E12, 50.0], [1.5592347E12, 50.0], [1.55923452E12, 50.0], [1.55923464E12, 50.0], [1.55923482E12, 50.0], [1.55923476E12, 50.0], [1.55923446E12, 50.0], [1.55923494E12, 50.0], [1.55923488E12, 50.0], [1.55923458E12, 50.0], [1.55923506E12, 49.53409961685823]], "isOverall": false, "label": "Payment Charge", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55923506E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 762.0, "minX": 1.0, "maxY": 1419.0, "series": [{"data": [[33.0, 1075.0], [32.0, 848.0], [2.0, 1032.0], [34.0, 1100.0], [37.0, 1093.0], [36.0, 1056.5], [39.0, 848.0], [38.0, 795.0], [41.0, 816.0], [40.0, 797.0], [43.0, 1020.0], [42.0, 1015.0], [45.0, 762.0], [44.0, 1076.0], [47.0, 1037.0], [46.0, 1008.0], [49.0, 1015.0], [48.0, 1020.0], [3.0, 1162.0], [50.0, 905.3774411995867], [4.0, 1117.0], [5.0, 1021.0], [6.0, 1070.0], [7.0, 1419.0], [9.0, 1267.5], [10.0, 1050.0], [11.0, 1327.0], [12.0, 1024.0], [13.0, 975.0], [14.0, 1015.0], [16.0, 1144.0], [1.0, 1159.0], [17.0, 917.0], [18.0, 886.0], [20.0, 883.0], [21.0, 1141.5], [22.0, 853.0], [23.0, 1132.0], [24.0, 1082.0], [25.0, 1138.0], [26.0, 1070.0], [27.0, 1114.0], [30.0, 948.5], [31.0, 978.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.96329278232256, 905.5730672865012]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3693.5833333333335, "minX": 1.55923446E12, "maxY": 38826.35, "series": [{"data": [[1.559235E12, 33618.816666666666], [1.5592347E12, 36512.95], [1.55923452E12, 37598.3], [1.55923464E12, 38146.0], [1.55923482E12, 38595.7], [1.55923476E12, 38826.35], [1.55923446E12, 3826.866666666667], [1.55923494E12, 34024.333333333336], [1.55923488E12, 35778.46666666667], [1.55923458E12, 37685.28333333333], [1.55923506E12, 28618.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.559235E12, 32448.5], [1.5592347E12, 35242.5], [1.55923452E12, 36290.25], [1.55923464E12, 36819.416666666664], [1.55923482E12, 37253.333333333336], [1.55923476E12, 37475.583333333336], [1.55923446E12, 3693.5833333333335], [1.55923494E12, 32840.083333333336], [1.55923488E12, 34533.416666666664], [1.55923458E12, 36374.916666666664], [1.55923506E12, 27622.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55923506E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 847.5360067777475, "minX": 1.55923446E12, "maxY": 1460.309455587392, "series": [{"data": [[1.559235E12, 977.5446836268762], [1.5592347E12, 898.3966966966975], [1.55923452E12, 872.8390201224867], [1.55923464E12, 865.506179936763], [1.55923482E12, 852.7403409090887], [1.55923476E12, 847.5360067777475], [1.55923446E12, 1460.309455587392], [1.55923494E12, 967.6538833387051], [1.55923488E12, 918.5179282868523], [1.55923458E12, 872.0197846959534], [1.55923506E12, 956.6053639846732]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55923506E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 847.4600395368548, "minX": 1.55923446E12, "maxY": 1460.120343839541, "series": [{"data": [[1.559235E12, 977.4879321591632], [1.5592347E12, 898.3390390390381], [1.55923452E12, 872.7419072615896], [1.55923464E12, 865.434320206957], [1.55923482E12, 852.6661931818172], [1.55923476E12, 847.4600395368548], [1.55923446E12, 1460.120343839541], [1.55923494E12, 967.5820174025131], [1.55923488E12, 918.34538768005], [1.55923458E12, 871.9421006691878], [1.55923506E12, 956.5318007662831]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55923506E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 165.43716475095775, "minX": 1.55923446E12, "maxY": 238.04871060171905, "series": [{"data": [[1.559235E12, 184.51565557729884], [1.5592347E12, 184.33573573573574], [1.55923452E12, 168.41440653251638], [1.55923464E12, 167.75596435757427], [1.55923482E12, 168.5454545454546], [1.55923476E12, 168.5639649816437], [1.55923446E12, 238.04871060171905], [1.55923494E12, 167.94134708346783], [1.55923488E12, 167.1164572479313], [1.55923458E12, 169.33401221995936], [1.55923506E12, 165.43716475095775]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55923506E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 559.0, "minX": 1.55923446E12, "maxY": 4803.0, "series": [{"data": [[1.559235E12, 2215.0], [1.5592347E12, 2360.0], [1.55923452E12, 1844.0], [1.55923464E12, 1608.0], [1.55923482E12, 2045.0], [1.55923476E12, 2133.0], [1.55923446E12, 4803.0], [1.55923494E12, 1837.0], [1.55923488E12, 2020.0], [1.55923458E12, 1814.0], [1.55923506E12, 1892.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.559235E12, 649.0], [1.5592347E12, 578.0], [1.55923452E12, 577.0], [1.55923464E12, 564.0], [1.55923482E12, 559.0], [1.55923476E12, 570.0], [1.55923446E12, 706.0], [1.55923494E12, 567.0], [1.55923488E12, 571.0], [1.55923458E12, 580.0], [1.55923506E12, 615.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.559235E12, 1132.9000000000015], [1.5592347E12, 1097.5], [1.55923452E12, 1096.0], [1.55923464E12, 1075.0], [1.55923482E12, 1071.0], [1.55923476E12, 1088.0], [1.55923446E12, 4054.0], [1.55923494E12, 1108.0], [1.55923488E12, 1082.0], [1.55923458E12, 1079.4000000000005], [1.55923506E12, 1137.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.559235E12, 1376.9900000000016], [1.5592347E12, 1413.25], [1.55923452E12, 4000.21], [1.55923464E12, 1436.0], [1.55923482E12, 1382.0], [1.55923476E12, 1423.3400000000001], [1.55923446E12, 4689.0], [1.55923494E12, 1380.0], [1.55923488E12, 1383.9900000000016], [1.55923458E12, 1469.0], [1.55923506E12, 1374.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.559235E12, 1227.0], [1.5592347E12, 1209.0], [1.55923452E12, 1214.0], [1.55923464E12, 1198.0], [1.55923482E12, 1185.0], [1.55923476E12, 1202.0], [1.55923446E12, 4443.0], [1.55923494E12, 1212.0], [1.55923488E12, 1193.9500000000007], [1.55923458E12, 1199.0], [1.55923506E12, 1228.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55923506E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 826.0, "minX": 1000.0, "maxY": 1134.5, "series": [{"data": [[9000.0, 922.0], [10000.0, 944.5], [11000.0, 945.0], [3000.0, 857.0], [12000.0, 955.5], [13000.0, 975.0], [14000.0, 1134.5], [15000.0, 931.0], [1000.0, 857.0], [4000.0, 918.0], [16000.0, 972.5], [18000.0, 923.0], [5000.0, 921.0], [20000.0, 910.0], [22000.0, 900.0], [6000.0, 922.0], [25000.0, 1068.0], [7000.0, 923.0], [2000.0, 826.0], [8000.0, 946.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 25000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 826.0, "minX": 1000.0, "maxY": 1134.5, "series": [{"data": [[9000.0, 922.0], [10000.0, 944.5], [11000.0, 945.0], [3000.0, 856.0], [12000.0, 955.5], [13000.0, 975.0], [14000.0, 1134.5], [15000.0, 931.0], [1000.0, 857.0], [4000.0, 918.0], [16000.0, 972.5], [18000.0, 923.0], [5000.0, 921.0], [20000.0, 910.0], [22000.0, 900.0], [6000.0, 922.0], [25000.0, 1068.0], [7000.0, 923.0], [2000.0, 826.0], [8000.0, 946.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 25000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.65, "minX": 1.55923446E12, "maxY": 59.03333333333333, "series": [{"data": [[1.559235E12, 51.1], [1.5592347E12, 55.5], [1.55923452E12, 57.15], [1.55923464E12, 57.983333333333334], [1.55923482E12, 58.65], [1.55923476E12, 59.03333333333333], [1.55923446E12, 6.65], [1.55923494E12, 51.71666666666667], [1.55923488E12, 54.38333333333333], [1.55923458E12, 57.28333333333333], [1.55923506E12, 42.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55923506E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.816666666666666, "minX": 1.55923446E12, "maxY": 59.016666666666666, "series": [{"data": [[1.559235E12, 51.1], [1.5592347E12, 55.5], [1.55923452E12, 57.15], [1.55923464E12, 57.983333333333334], [1.55923482E12, 58.666666666666664], [1.55923476E12, 59.016666666666666], [1.55923446E12, 5.816666666666666], [1.55923494E12, 51.71666666666667], [1.55923488E12, 54.38333333333333], [1.55923458E12, 57.28333333333333], [1.55923506E12, 43.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55923506E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.816666666666666, "minX": 1.55923446E12, "maxY": 59.016666666666666, "series": [{"data": [[1.559235E12, 51.1], [1.5592347E12, 55.5], [1.55923452E12, 57.15], [1.55923464E12, 57.983333333333334], [1.55923482E12, 58.666666666666664], [1.55923476E12, 59.016666666666666], [1.55923446E12, 5.816666666666666], [1.55923494E12, 51.71666666666667], [1.55923488E12, 54.38333333333333], [1.55923458E12, 57.28333333333333], [1.55923506E12, 43.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55923506E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.816666666666666, "minX": 1.55923446E12, "maxY": 59.016666666666666, "series": [{"data": [[1.559235E12, 51.1], [1.5592347E12, 55.5], [1.55923452E12, 57.15], [1.55923464E12, 57.983333333333334], [1.55923482E12, 58.666666666666664], [1.55923476E12, 59.016666666666666], [1.55923446E12, 5.816666666666666], [1.55923494E12, 51.71666666666667], [1.55923488E12, 54.38333333333333], [1.55923458E12, 57.28333333333333], [1.55923506E12, 43.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55923506E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

